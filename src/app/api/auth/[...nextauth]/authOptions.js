import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/app/lib/prisma";

const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;
        const user = await prisma.user.findFirst({
          where: { email: email, password: password },
        });
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/api/auth/login",
  },

  callbacks: {
    async jwt({ token, user }) {
      token.role = user?.role;
      return token;
    },

    async session({ session, token }) {
      const user = await prisma.user.findFirst({
        where: { id: Number(token.sub) }, // You might want to hash the password before comparing it,
      });
      session.user.id = Number(token.sub);
      session.user.role = user.role;
      session.themeColor = {
        "--background-color": "#ffffff",
        "--text-color": "#000000",
      };
      return session;
    },
  },
};

export default options;

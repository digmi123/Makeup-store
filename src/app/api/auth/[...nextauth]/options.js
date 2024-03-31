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
        console.log({ user });
        return user;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      const user = await prisma.user.findFirst({
        where: { id: Number(token.sub) }, // You might want to hash the password before comparing it,
      });
      session.user.role = user.role;
      return session;
    },
  },
};

export default options;

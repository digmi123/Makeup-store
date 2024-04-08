import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    if (
      req.nextUrl.pathname === "/users/add" &&
      req.nextauth.token?.role !== "admin"
    ) {
      return new NextResponse("You dont have premission for this path");
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  pages: {
    signIn: "/auth/login",
  },
};

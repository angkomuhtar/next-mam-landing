import { NextResponse } from "next/server";
import authConfig from "./auth.config";
import NextAuth from "next-auth";
const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const isloggedIn = !!req.auth;
  if (req.nextUrl.pathname === "/login" && isloggedIn) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (req.nextUrl.pathname.startsWith("/dashboard") && !isloggedIn) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  // console.log("Middleware", req.url, isloggedIn, req.nextUrl.pathname);
  // if (isloggedIn) {
  //   // if (req.nextUrl.pathname === "/login") {
  //   //   return NextResponse.redirect(new URL("/dashboard", req.url));
  //   // }
  //   return NextResponse.next();
  // }
  // return NextResponse.redirect(new URL("/login", req.url));

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/login",
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};

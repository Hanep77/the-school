import { UserType } from "@/libs/nextauth";
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: UserType & DefaultSession["user"];
    token?: string;
  }

  interface JWT {
    token?: string;
  }

  interface User extends DefaultUser {
    token?: string;
  }
}

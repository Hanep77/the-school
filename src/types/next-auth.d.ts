import { UserType } from "@/libs/nextauth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: UserType & DefaultSession["user"];
    token?: string;
    expires?: number;
  }

  interface JWT {
    token?: string;
    expires?: number;
  }

  interface User extends DefaultUser {
    token?: string;
  }
}

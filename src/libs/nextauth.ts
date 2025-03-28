import Credentials from "next-auth/providers/credentials";
import { AuthOptions } from "next-auth";
import axios from "axios";

export interface UserType {
  id: number;
  nama: string;
  email: string;
  no_telepon: string;
  sekolah_id: string;
  is_active: boolean;
  created_at: string;
  udpated_at: string;
  role: { id: string, nama: string }[];
  token: string;
}

export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        username: { label: 'username', type: 'text' },
        password: { label: 'password', type: 'password' }
      },
      async authorize(credentials) {
        const user = await axios.post(process.env.NEXT_PUBLIC_API_URL + "/login", credentials);
        return { ...user.data.data, token: user.data.credentials };
      }
    })
  ],
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, session, user, trigger }) {
      if (trigger === "update") {
        token.token = session.token;
        token.expires = session.expires;
      }

      if (user) {
        const today = new Date();
        const nextThreeDays = new Date(today.setDate(today.getDate() + 3));

        token.user = user;
        token.token = user.token;
        token.expires = nextThreeDays.getTime();
      }

      return token;
    },

    async session({ session, token }) {
      session.user = token.user as UserType;
      session.token = token.token as string;
      session.expires = token.expires as number;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}

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
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
        token.token = user.token;
      }
      return token;
    },

    async session({ session, token }) {
      session.user = token.user as UserType;
      session.token = token.token as string;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}

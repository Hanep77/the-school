import Credentials from "next-auth/providers/credentials";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' }
      },
      authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid Credentials');
        }

        if (credentials.email == "admin@gmail.com" && credentials.password == "rahasia") {
          const user = {
            id: "123",
            name: "admin",
            email: "admin@gmail.com",
            role: "admin"
          };
          return user;
        }

        if (credentials.email == "guru@gmail.com" && credentials.password == "rahasia") {
          const user = {
            id: "123",
            name: "guru",
            email: "guru@gmail.com",
            role: "guru"
          };
          return user;
        }

        throw new Error('Invalid Credentials');
      }
    })
  ],
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
}

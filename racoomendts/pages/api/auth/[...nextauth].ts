import NextAuth from "next-auth"
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import prisma from "../../../lib/prisma";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    // ...add more providers here
  ],
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  callbacks: {
    async signIn({ user }) {
      const dbuser = await prisma.user.findUnique({
        where: {
          email: user.email as string,
        }
      })
      if (!dbuser) {
        const names = user.name?.split(' ');
        if (names) {
          const newUser = await prisma.user.create({
            data: {
              email: user.email as string,
              firstname: names[0],
              lastname: names[1],
            }
          })
        }
      }
      return true
    }
  }
})
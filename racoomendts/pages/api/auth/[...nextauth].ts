import NextAuth from "next-auth"
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import prisma from "../../../lib/prisma";
import { signIn } from "next-auth/react";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: '250833474734-l5q2p5guj9vlnufvtquk2r51t7j88vm7.apps.googleusercontent.com',
      clientSecret: "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",
    }),
    
    // ...add more providers here
  ],
  jwt: {
    secret: process.env.JWT_SECRET,   
  },
  callbacks: {
    async signIn({user}) {
        const dbuser = await prisma.user.findUnique({
          where: {
            //@ts-ignore
            email: user.email,
          }
        })
        if(!dbuser) {
          //@ts-ignore
          const names = user.name.split(' ');
          const newUser = await prisma.user.create({
            data: {
              email: user.email as string,
              firstname: names[0],
              lastname: names[1],
            }
          })
        }
      return true
    }
  }
  // session: {
  //   strategy: 'jwt',
  // },
  // jwt: {
  //   secret: process.env.JWT_SECRET,
  // },
  // pages: {
  //   signIn: '/login',
  // }
})
import NextAuth from "next-auth"
import GitHubProvider from 'next-auth/providers/github';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    
    // ...add more providers here
  ],
  jwt: {
    secret: process.env.JWT_SECRET,   
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
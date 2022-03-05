// import type { GetStaticProps } from 'next'
// import { FormEvent, useEffect } from 'react'
// import styles from '../styles/Login.module.css'
// import prisma from '../lib/prisma'
// import { AppProps } from 'next/dist/shared/lib/router/router'
// import { signIn, useSession } from 'next-auth/react'
// import { useRouter } from 'next/router'

// import Link from 'next/link'
// import Head from 'next/head'
// import Image from 'next/image'

// export const getStaticProps: GetStaticProps = async () => {
//   return { props: {}}
// }

// const Login = ({ }: AppProps) => {

//   const { data: session} = useSession()
//   const router = useRouter();

//   useEffect(() => {
//     if (session) {
//       router.push('/profile/dashboard/2')
//     }
//   }, [session, router])

//   const loginUser = async (event: FormEvent) => {
//     event.preventDefault();

//     return;
//   }

//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Log in</title>
//         <meta name="Login" content="Log in to Racoomend" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <Image src="/raccoon.png" alt="Racoomend logo" width={200} height={143} />
//       <form onSubmit={loginUser} className={styles.logForm}>
//         <label htmlFor="name">Email</label>
//         <input className={styles.formInput} id="name" name="name" type="email" autoComplete="email" placeholder="email@youremail.com" required/>
//         <label htmlFor='password'>Password</label>
//         <input className={styles.formInput} id='password' name='password' type="password" placeholder="Tell me your secrets" required/>
//         <button type='submit' className={styles.loginButton} onClick={() => signIn()}>Log In</button>
//         <p className={styles.signupLink}>Don{"'"}t have an account? <Link href="/signup"><a>Sign up!</a></Link></p>
//       </form>
//         <button onClick={() => signIn('github')}>Sign In with GitHub</button>
//     </div>
//   )
// }

// export default Login

import { Session } from "inspector";
import { GetServerSideProps } from "next";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router";

export default function Component() {

  const router = useRouter()
  const { data: session } = useSession()
  if (session) {
    console.log(session);
    router.push(`/profile/dashboard/${session.user?.email}`)
    
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn('github')}>Sign in</button>
    </>
  )
}
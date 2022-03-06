import type { GetStaticProps } from 'next'
import styles from '../styles/Login.module.css'
import { AppProps } from 'next/dist/shared/lib/router/router'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

import Head from 'next/head'
import Image from 'next/image'

const Login = ({ }: AppProps) => {
  
  const router = useRouter()
  const { data: session } = useSession()
  console.log(session);
  if (session) {
    console.log(session);
    // router.push(`/profile/dashboard/${session.user?.email}`)
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Log in</title>
        <meta name="Login" content="Log in to Racoomend" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image src="/raccoon.png" alt="Racoomend logo" width={200} height={143} />
      <button onClick={() => signIn('google')}>Sign in with Google</button>
      <button onClick={() => signIn('github')}>Sign in with GitHub</button>
    </div>
  )
}

export default Login;

//       <form onSubmit={loginUser} className={styles.logForm}>
//         <label htmlFor="name">Email</label>
//         <input className={styles.formInput} id="name" name="name" type="email" autoComplete="email" placeholder="email@youremail.com" required/>
//         <label htmlFor='password'>Password</label>
//         <input className={styles.formInput} id='password' name='password' type="password" placeholder="Tell me your secrets" required/>
//         <button type='submit' className={styles.loginButton} onClick={() => signIn()}>Log In</button>
//         <p className={styles.signupLink}>Don{"'"}t have an account? <Link href="/signup"><a>Sign up!</a></Link></p>
//       </form>
//         <button onClick={() => signIn('github')}>Sign In with GitHub</button>
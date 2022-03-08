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
  if (session) {
    router.push(`/profile/dashboard/${session.user?.email}`)
    // return (
    //   <>
    //     Signed in as {session.user?.email} <br />
    //     <button onClick={() => signOut()}>Sign out</button>
    //   </>
    // )
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Log in</title>
        <meta name="Login" content="Log in to Racoomend" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image src="/raccoon.png" alt="Racoomend logo" width={200} height={143} />
      <h3>Sign In</h3>
      <div>
        <button onClick={() => signIn('google')}><Image src="https://img.icons8.com/color/48/000000/google-logo.png" alt='Google Icon' width={40} height={40}/></button>
        <button onClick={() => signIn('github')}><Image src="https://img.icons8.com/glyph-neue/64/000000/github.png" alt='GitHub Icon' width={40} height={40}/></button>
      </div>
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
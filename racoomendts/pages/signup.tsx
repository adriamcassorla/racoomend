import type { GetStaticProps } from 'next'
import { FormEvent } from 'react'
import styles from '../styles/Signup.module.css'
import prisma from '../lib/prisma'
import { AppProps } from 'next/dist/shared/lib/router/router'

import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'


export const getStaticProps: GetStaticProps = async () => {
  return { props: {}}
}

const Login = ({ }: AppProps) => {

  const signupUser = async (event: FormEvent) => {
    event.preventDefault();

    return;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Sign Up</title>
        <meta name="Sign Up" content="Sign Up to Racoomend" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image src="/raccoon.png" alt="Racoomend logo" width={200} height={143} />
      <form onSubmit={signupUser} className={styles.logForm}>
        <label htmlFor="name">Email</label>
        <input className={styles.formInput} id="name" name="name" type="email" autoComplete="email" placeholder="Introduce your email" required/>
        <label htmlFor='password'>Password</label>
        <input className={styles.formInput} id='password' name='password' type="password" placeholder="Set a password" required/>
        <button type='submit' className={styles.loginButton}>Sign Up</button>
        <p className={styles.loginLink}>Already Signed Up? <Link href="/login"><a>Login now!</a></Link></p>
      </form>
    </div>
  )
}

export default Login

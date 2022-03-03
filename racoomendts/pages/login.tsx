import type { GetStaticProps } from 'next'
import { FormEvent } from 'react'
import styles from '../styles/Login.module.css'
import prisma from '../lib/prisma'
import { AppProps } from 'next/dist/shared/lib/router/router'
import Head from 'next/head'
import Image from 'next/image'
export const getStaticProps: GetStaticProps = async () => {
  return { props: {}}
}

const Login = ({ }: AppProps) => {

  const loginUser = async (event: FormEvent) => {
    event.preventDefault();

    return;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Log in</title>
        <meta name="Login" content="Log in to Racoomend" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image src="/raccoon.png" alt="Racoomend logo" width={200} height={143} />
      <form onSubmit={loginUser} className={styles.logForm}>
        <label htmlFor="name">Email</label>
        <input className={styles.formInput} id="name" name="name" type="email" autoComplete="email" placeholder="email@youremail.com" required/>
        <label htmlFor='password'>Password</label>
        <input className={styles.formInput} id='password' name='password' type="password" placeholder="Tell me your secrets" required/>
        <button type='submit' className={styles.loginButton}>Log In</button>
      </form>
    </div>
  )
}

export default Login

import type { GetStaticProps } from 'next'
import styles from '../styles/Home.module.css'
import prisma from '../lib/prisma'
import { AppProps } from 'next/dist/shared/lib/router/router'
import Head from 'next/head'
export const getStaticProps: GetStaticProps = async () => {
  return { props: {}}
}

const Signup = ({ users }: AppProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sign up</title>
        <meta name="Signup" content="Sign up to Racoomend" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export default Signup

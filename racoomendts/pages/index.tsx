import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import prisma from '../lib/prisma'
import { AppProps } from 'next/dist/shared/lib/router/router'
import { User } from '../types/User'
import Link from 'next/link'

export const getStaticProps: GetStaticProps = async () => {
  const users = await prisma.user.findMany({});
  return { props: { users } };
}

const Home = ({ users }: AppProps) => {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h3>Exhausted of spending more time choosing a netflix movie than watching it?</h3>
        <h3>Tricked by TripAdvisor to go to some dirty restaurant? </h3>
        <h2>Trust your friends, they know you better.</h2>
        <Link href='/profile/dashboard/2' passHref> 
          <div>
            <button>Start Racoomending</button>
          </div>
        </Link>

      </div>
    </div>
  )
}

export default Home

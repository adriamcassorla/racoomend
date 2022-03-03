import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import prisma from '../lib/prisma'
import { AppProps } from 'next/dist/shared/lib/router/router'
import { User } from '../types/User'
import Header from '../components/Header'

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
      <Header />
      <ul>
        {users ? users.map((user: User) => {
          return <li key={user.id}>{user.email}</li>
        }) : null 
         }
      </ul>
    </div>
  )
}

export default Home
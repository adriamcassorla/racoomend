import type { GetStaticPaths, GetStaticProps } from 'next'
import { AppProps } from 'next/dist/shared/lib/router/router'
import prisma from '../../lib/prisma'
import Head from 'next/head'

export const getStaticPaths: GetStaticPaths = async () => {
  const user = await prisma.user.findUnique({
    where: {
      id: 'b14741bc-53c2-4945-8f92-0aa582d517a0',
    },
  })
  // console.log(user);
  return {
    paths: [],
    fallback: false,
  }
}
export const getStaticProps: GetStaticProps = async () => {
  return { props: {}}
}

const Profile = ({ users }: AppProps) => {
  return (
    <div>
      <Head>
        <title>Profile Page</title>
        <meta name="Profile" content="See your data" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export default Profile
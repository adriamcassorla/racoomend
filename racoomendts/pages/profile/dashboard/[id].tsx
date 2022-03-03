import type { GetStaticProps } from 'next'
import { AppProps } from 'next/dist/shared/lib/router/router'
import Head from 'next/head'

export const getStaticProps: GetStaticProps = async () => {
  
  return { props: {}}
}

const Dashboard = ({ users }: AppProps) => {
  return (
    <div>
      <Head>
        <title>Sign up</title>
        <meta name="Dashboard" content="Interact with recommendations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export default Dashboard
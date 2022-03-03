import type { GetServerSideProps } from 'next'
import { AppProps } from 'next/dist/shared/lib/router/router'
import Head from 'next/head'
import prisma from '../../../lib/prisma'
import { Recommendation } from '../../../types/Recommendation'

export const getServerSideProps: GetServerSideProps = async () => {
  const recommendations = await prisma.recommendation.findMany({
    where: {
      authorId: 'b14741bc-53c2-4945-8f92-0aa582d517a0'
    }
  })

  return { props: { recommendations }}
}

const Dashboard = ({ recommendations }: AppProps) => {
  console.log(recommendations);
  return (
    <div>
      <Head>
        <title>Sign up</title>
        <meta name="Dashboard" content="Interact with recommendations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul>
      {recommendations ? recommendations.map((recommendation: Recommendation) => {
          return (<li key={recommendation.id}>
              <h1>
              {recommendation.title}
              </h1>
              <p>{recommendation.oneline}</p>
            </li>)
      }) : null
    }
      </ul>
    </div>
  )
}

export default Dashboard
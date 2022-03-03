import type { GetServerSideProps } from 'next'
import { AppProps } from 'next/dist/shared/lib/router/router'
import Head from 'next/head'
import GroupList from '../../../components/GroupList'
import RecommendationList from '../../../components/RecommendationList'
import prisma from '../../../lib/prisma'

export const getServerSideProps: GetServerSideProps = async () => {
  const recommendations = await prisma.recommendation.findMany({
    where: {
      authorId: 'b14741bc-53c2-4945-8f92-0aa582d517a0'
    }
  })

  const groups = await prisma.group.findMany({
    where: {
      users: {
        some: {
          id: 'b14741bc-53c2-4945-8f92-0aa582d517a0'
        }
      } 
    }
  })

  return { props: { recommendations, groups }}
}

const Dashboard = ({ recommendations, groups }: AppProps) => {
  return (
    <div>
      <Head>
        <title>Sign up</title>
        <meta name="Dashboard" content="Interact with recommendations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GroupList groups={groups}/>
      <RecommendationList recommendations={recommendations}/>
    </div>
  )
}

export default Dashboard
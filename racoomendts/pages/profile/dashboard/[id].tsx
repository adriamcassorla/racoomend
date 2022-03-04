// Functionality types, components types, functions and DB model.
import { AppProps } from 'next/dist/shared/lib/router/router'
import type { GetServerSideProps } from 'next'
import prisma from '../../../lib/prisma'
import { useState } from 'react'

// Components to load on the page and styles.
import Head from 'next/head'
import CategorySelector from '../../../components/Dashboard/CategorySelector'
import GroupList from '../../../components/Dashboard/GroupList'
import RecommendationList from '../../../components/Dashboard/RecommendationList'
import styles from '../../../styles/Dashboard.module.css';

// Getting the required Props from DB.
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

  const [category, setCategory] = useState('');

  console.log(category);

  return (
    <div className={styles.dashboardContainer}>
      <Head>
        <title>Dashboard</title>
        <meta name="Dashboard" content="Interact with recommendations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.leftContainer}>
        <GroupList groups={groups}/>
      </div>
      <div className={styles.rightContainer}>
        <CategorySelector setCategory={setCategory}/>
        <RecommendationList recommendations={recommendations} category={category}/>
      </div>
    </div>
  )
}

export default Dashboard
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
      authorId: '5d1a59e8-9113-4df6-bbfe-efaeb3baf4cc'
    }
  })
  const groups = await prisma.group.findMany({
    where: {
      users: {
        some: {
          id: '5d1a59e8-9113-4df6-bbfe-efaeb3baf4cc'
        }
      } 
    }
  })
  return { props: { recommendations, groups }}
}

const Dashboard = ({ recommendations, groups }: AppProps) => {

  const [category, setCategory] = useState('');
  const [currentGroup, setGroup] = useState('96ecde36-0462-4e11-8841-3bb2d882f7b1');

  console.log(category);
  console.log(currentGroup);

  return (
    <div className={styles.dashboardContainer}>
      <Head>
        <title>Dashboard</title>
        <meta name="Dashboard" content="Interact with recommendations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.leftContainer}>
        <GroupList groups={groups} currentGroup={currentGroup} setGroup={setGroup}/>
      </div>
      <div className={styles.rightContainer}>
        <CategorySelector setCategory={setCategory} category={category}/>
        <RecommendationList recommendations={recommendations} category={category} currentGroup={currentGroup}/>
      </div>
    </div>
  )
}

export default Dashboard
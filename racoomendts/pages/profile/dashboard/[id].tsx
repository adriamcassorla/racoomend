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
import { User } from '../../../types/User'
import { Recommendation } from '../../../types/Recommendation'
import { Group } from '../../../types/Group'

// Getting the required Props from DB.
export const getServerSideProps: GetServerSideProps = async ( {params} ) => {

  const email = params?.email;
  const res = await fetch(`http://localhost:3000/api/recommendation/${email}`)
  const data = await res.json()
  console.log(data);
  const { user, recommendations, groups} = data
  return { props: { user, recommendations, groups }}
}

type DashboardProps = {
  user: User,
  recommendations: Recommendation[],
  groups: Group[],
}

const Dashboard = ({ user, recommendations, groups }: DashboardProps) => {

  const [category, setCategory] = useState('');
  const [currentGroup, setGroup] = useState('96ecde36-0462-4e11-8841-3bb2d882f7b1');

  console.log(category);
  console.log(currentGroup);
  console.log(user);
  console.log(recommendations);
  console.log(groups);
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
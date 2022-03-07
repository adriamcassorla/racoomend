// Functionality types, components types, functions and DB model.
import type { GetServerSideProps } from 'next'
import { User } from '../../../types/User'
import { Group } from '../../../types/Group'
import { Recommendation } from '../../../types/Recommendation'
import { useContext, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import CurrentUserContext from '../../../utils/context'
import { useRouter } from 'next/router'

// Components to load on the page and styles.
import Head from 'next/head'
import CategorySelector from '../../../components/Dashboard/CategorySelector'
import GroupList from '../../../components/Dashboard/GroupList'
import RecommendationList from '../../../components/Dashboard/RecommendationList'
import styles from '../../../styles/Dashboard.module.css';
import ModalComponent from '../../../components/ModalComponent'

// Getting the required Props from DB.
export const getServerSideProps: GetServerSideProps = async ( {params} ) => {

  const email = params?.id;
  const res = await fetch(`http://localhost:3000/api/recommendation/${email}`)
  const data = await res.json()
  const { user, recommendations, groups} = data
  return { props: { user, recommendations, groups }}
}

type DashboardProps = {
  user: User,
  recommendations: Recommendation[],
  groups: Group[],
}

const Dashboard = ({ user, recommendations, groups }: DashboardProps) => {

  // Taking email from route.
  const router = useRouter();
  const { id } = router.query;

  // Checking if there is a session to act accordingly
  const { data: session } = useSession();
  //@ts-ignore
  const { currentUser, setUser, currentRecommendations, setRecommendations } = useContext(CurrentUserContext);
  const [category, setCategory] = useState('');
  const [currentGroup, setGroup] = useState('');
  const [showGroupDialog, setGroupDialog] = useState(false);
  const [showReccomendationDialog, setRecommendationDialog] = useState(false);

  useEffect(() => {
    //@ts-ignore
    setUser(user);
    //@ts-ignore
    setRecommendations(recommendations);
  }, [])
  console.log('From Dashboard', currentRecommendations);
  console.log('From Dashboard', currentUser);
  //@ts-ignore
  if (!session || (session && session.user.email !== id)) {
    return ( 
      <div className={styles.notAllowed}>
        <h2>{"Don't meddle into other people's issues little raccoon!"}</h2> 
        <h3>Please Sign in to access your own content.</h3>
      </div> )
  }
  return (
    <div className={styles.dashboardContainer}>
      <Head>
        <title>Dashboard</title>
        <meta name="Dashboard" content="Interact with recommendations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.leftContainer}>
        <GroupList setGroupDialog={setGroupDialog} groups={groups} currentGroup={currentGroup} setGroup={setGroup}/>
      </div>
      <div className={styles.rightContainer}>
        <CategorySelector setCategory={setCategory} category={category}/>
        <RecommendationList setRecommendationDialog={setRecommendationDialog} category={category} currentGroup={currentGroup} recommendations={currentRecommendations}/>
      </div>

      <ModalComponent category="Group" showDialog={showGroupDialog} setDialog={setGroupDialog}/>
      <ModalComponent category="Recommendation" showDialog={showReccomendationDialog} setDialog={setRecommendationDialog} currentGroup={currentGroup} />

    </div>
  )
}

export default Dashboard
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
import CreateRecommendation from '../../../components/Dashboard/Buttons/Create Recommendation'
import styles from '../../../styles/Dashboard.module.css';
import ModalComponent from '../../../components/ModalComponent'
import CreateGroup from '../../../components/Dashboard/Buttons/CreateGroup'
// typing API response and Props
type DashboardProps = {
  user: User,
  recommendations: Recommendation[],
  groups: Group[],
}

// Getting the required Props from DB.
export const getServerSideProps: GetServerSideProps<DashboardProps> = async ( {params} ) => {
    console.log('From API')
    const email = params?.id;
    const res = await fetch(`http://localhost:3000/api/recommendation/${email}`)
    const data = await res.json()
    const { user, recommendations, groups } = data
    
    return { props: { user, recommendations, groups }}

}


const Dashboard = ({ user, recommendations, groups }: DashboardProps) => {
  

  // Taking email from route.
  const router = useRouter();
  const { id } = router.query;

  // Checking if there is a session to act accordingly
  const { data: session } = useSession();
  const { currentUser, setUser, currentRecommendations, setRecommendations, currentGroups, setGroups } = useContext(CurrentUserContext);
  const [category, setCategory] = useState<string>('');
  const [currentGroup, setGroup] = useState<string>('');
  const [showGroupDialog, setGroupDialog] = useState(false);
  const [showReccomendationDialog, setRecommendationDialog] = useState(false);

  useEffect(() => {
    if (setUser && setRecommendations && setGroups) {

      setUser(user);
      setRecommendations(recommendations);
      setGroups(groups);
    }
  }, [])

  //@ts-ignore
  if (!session || (session && session.user.email !== id)) {
    return ( 
      <div className={styles.notAllowed}>
        <h2>{"Don't meddle into other people's issues little raccoon!"}</h2> 
        <h3>Please Sign in to access your own content.</h3>
      </div> )
  }

  return (
    <div>

      <div>
        <Head>
          <title>Dashboard</title>
          <meta name="Dashboard" content="Interact with recommendations" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

      </div>
        <div className={styles.dashboardContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.groupsContainer}>
            <GroupList currentGroup={currentGroup} setGroup={setGroup}/>
          </div>
          <div className={styles.groupButton}>
            <CreateGroup setGroupDialog={setGroupDialog} />
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.categoryContainer}>
            <CategorySelector setCategory={setCategory} category={category}/>
          </div>
          <div className={styles.recommendationsContainer}>
            <RecommendationList category={category} currentGroup={currentGroup} />
          </div>
          <div className={styles.createRecContainer}>
            <CreateRecommendation setRecommendationDialog={setRecommendationDialog}/>
          </div>
        </div>

        <ModalComponent category="Group" showDialog={showGroupDialog} setDialog={setGroupDialog}/>
        <ModalComponent category="Recommendation" showDialog={showReccomendationDialog} setDialog={setRecommendationDialog} currentGroup={currentGroup} />
      </div>
    </div>
  )
}

export default Dashboard
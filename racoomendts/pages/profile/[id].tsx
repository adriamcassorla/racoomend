// Functionality types, components types, functions and DB model.
import type { GetServerSideProps } from 'next'
import { User } from '../../types/User'
import { Group } from '../../types/Group'
import { Recommendation } from '../../types/Recommendation'
import { useContext, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import CurrentUserContext from '../../utils/context'
import { useRouter } from 'next/router'

// Components to load on the page and styles.
import Head from 'next/head'
import styles from '../../styles/Profile.module.css';
import Image from 'next/image'
import { group } from 'console'

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
  // Loading context.
  // @ts-ignore
  const { currentUser, setUser } = useContext(CurrentUserContext);
  useEffect(() => {
    setUser(user);
  }, [])
  //@ts-ignore
  if (!session || (session && session.user.email !== id)) {
    return ( 
      <div className={styles.notAllowed}>
        <div>
          <h2>{"Don't meddle into other people's issues little raccoon!"}</h2> 
        </div>
        <div>
          <h3>Please Sign in to access your own content.</h3>
        </div>
      </div> )
  }
  

  return (
    <div>
      <Head>
        <title>Profile</title>
        <meta name="Profile" content="Profile Details" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.profileContainer}>
        <div className={styles.detailsContainer}>
          <Image src={session.user?.image ? session.user.image : '/raccoon.png'} alt="User profile image" width={'150px'} height={'150px'} className={styles.profileImg}/>
          <h3>{user.firstname} {user.lastname}</h3>
          <h5>{user.email}</h5>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.groupsContainer}>          
            <p>You are currently in {groups.length} groups</p>
            <ul>
              {groups.map(group => {
                return (
                  <li key={group.id}>
                    {group.name}  
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={styles.recommendationsContainer}>
            <p>For a total of {recommendations.length} recommendations</p>
            <ul>
              These are the recommendations you have created.
              {recommendations.filter(recommendation => {
                return recommendation.authorId === user.id
              }).map(recommendation => {
                return (
                  <li key={recommendation.id}>
                    {recommendation.title}
                  </li>
                )
              })
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
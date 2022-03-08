import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/index'
import { SessionProvider } from 'next-auth/react';
import CurrentUserContext from '../utils/context';
import { Dispatch, SetStateAction, useState } from 'react';
import { User } from '../types/User';
import { Recommendation } from '../types/Recommendation';
import { Group } from '../types/Group'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {

  const [currentUser, setUser] = useState<User>({id:"b4d90384-5594-4e8a-9ab6-c35dc23a6b2a",createdAt: new Date('2022-03-05T20:39:31.473Z'),updatedAt: new Date("2022-03-05T20:39:31.470Z"),email:"nicolopez413@gmail.com",firstname:"Nico",lastname:"Lopez"});
  const [currentRecommendations, setRecommendations] = useState<Recommendation[]>([{id: "eaacc1ff-95f8-417a-b70f-40b7f40931f4", createdAt: new Date("2022-03-04T17:29:30.836Z"), updatedAt: new Date("2022-03-04T17:29:30.836Z"), title: "Best coding bootcamp", oneline: "Lock yourself for 3 months", url: "codeworks.me", authorId: "a85b2fc0-495a-450a-940f-d26ae10e4fbe", categories: "ARTICLE", groupId: "96ecde36-0462-4e11-8841-3bb2d882f7b1"}])
  const [currentGroups, setGroups] = useState<Group[]>([{id: 'c0d0aa18-b92e-4eb9-8b73-5c6d63087fc9', createdAt: new Date('2022-03-08T14:15:59.334Z'), updatedAt: new Date('2022-03-08T14:15:59.334Z'), name: 'Local'}])
  return (
    <CurrentUserContext.Provider value={{currentUser, setUser, currentRecommendations, setRecommendations, currentGroups, setGroups}}>
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
    </CurrentUserContext.Provider>
  )
}

export default MyApp

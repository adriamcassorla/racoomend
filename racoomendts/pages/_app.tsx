import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/index'
import { SessionProvider } from 'next-auth/react';
import CurrentUserContext from '../utils/context';
import { useState } from 'react';
import { Context } from '../types/Context';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {

  const [currentUser, setUser] = useState({});
  const [currentRecommendations, setRecommendations] = useState([])
  return (
    //@ts-ignore
    <CurrentUserContext.Provider value={{currentUser, setUser, currentRecommendations, setRecommendations}}>
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
    </CurrentUserContext.Provider>
  )
}

export default MyApp

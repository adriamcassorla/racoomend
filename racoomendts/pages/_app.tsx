import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/index";
import { SessionProvider } from "next-auth/react";
import CurrentUserContext from "../utils/context";
import { useState } from "react";
import { User } from "../types/User";
import { Recommendation } from "../types/Recommendation";
import { Group } from "../types/Group";
import { userMock, recommendationMock, mockGroup } from "../utils/mocks";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [currentUser, setUser] = useState<User>(userMock);
  const [currentRecommendations, setRecommendations] = useState<
    Recommendation[]
  >([recommendationMock]);
  const [currentGroups, setGroups] = useState<Group[]>([mockGroup]);
  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setUser,
        currentRecommendations,
        setRecommendations,
        currentGroups,
        setGroups,
      }}
    >
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </CurrentUserContext.Provider>
  );
}

export default MyApp;

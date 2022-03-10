// Functionality types, components types, functions and DB model.
import type { GetServerSideProps } from "next";
import { User } from "../../types/User";
import { Group } from "../../types/Group";
import { Recommendation } from "../../types/Recommendation";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

// Components to load on the page and styles.
import Head from "next/head";
import styles from "../../styles/Profile.module.css";
import Image from "next/image";

// Typing API response and props
type DashboardProps = {
  user: User;
  recommendations: Recommendation[];
  groups: Group[];
};

// Getting the required Props from DB.
export const getServerSideProps: GetServerSideProps<DashboardProps> = async ({
  params,
}) => {
  const email = params?.id;
  const res = await fetch(
    `${process.env.BASE_URL}/api/recommendation/${email}`
  );
  const data = await res.json();
  const { user, recommendations, groups } = data;
  return { props: { user, recommendations, groups } };
};

const Dashboard = ({ user, recommendations, groups }: DashboardProps) => {
  // Taking email from route.
  const router = useRouter();
  const { id } = router.query;

  // Checking if there is a session to act accordingly
  const { data: session } = useSession();

  if (!session || (session && session.user?.email !== id)) {
    return (
      <div className={styles.notAllowed}>
        <div>
          <h2>{"Don't meddle into other people's issues little raccoon!"}</h2>
        </div>
        <div>
          <h3>Please Sign in to access your own content.</h3>
        </div>
      </div>
    );
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
          <Image
            src={session.user?.image ? session.user.image : "/raccoon.png"}
            alt="User profile image"
            width={"150px"}
            height={"150px"}
            className={styles.profileImg}
          />
          <h3 className={styles.name}>
            {user.firstname} {user.lastname}
          </h3>
          <h5 className={styles.email}>{user.email}</h5>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.groupsContainer}>
            <h3>You are currently in {groups.length} groups 🙌</h3>
            <ul className={styles.list}>
              {groups.map((group) => {
                return <li key={group.id}>{group.name}</li>;
              })}
            </ul>
          </div>
          <div className={styles.recommendationsContainer}>
            <h3>Have a total of {recommendations.length} recommendations ✔️</h3>
            <ul className={styles.recList}>
              <h4>These are the ones given by you:</h4>
              {recommendations
                .filter((recommendation) => {
                  return recommendation.authorId === user.id;
                })
                .map((recommendation) => {
                  return (
                    <li key={recommendation.id}>{recommendation.title}</li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

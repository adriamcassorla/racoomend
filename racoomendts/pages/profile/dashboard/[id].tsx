import { useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import type { GetServerSideProps } from "next";

import CurrentUserContext from "../../../utils/context";
import DashboardProps from "../../../types/DashboardProps";

import Head from "next/head";
import {CategorySelector, GroupList, RecommendationList, CreateButton, ModalComponent} from "../../../components/index";
import styles from "../../../styles/Dashboard.module.css";

// Getting the required Props from DB.
export const getServerSideProps: GetServerSideProps<DashboardProps> = async ({
  params,
}) => {
  console.log("From API");
  const email = params?.id;
  console.log(email);
  const res = await fetch(
    `${process.env.BASE_URL}/api/recommendation/${email}`
  );
  const data = await res.json();
  console.log(data)
  const { user, recommendations, groups } = data;
  return { props: { user, recommendations, groups } };
};

const Dashboard = ({ user, recommendations, groups }: DashboardProps) => {
  // Taking email from route.
  const router = useRouter();
  const { id } = router.query;

  // Checking if there is a session to act accordingly
  const { data: session } = useSession();
  const {
    setUser,
    setRecommendations,
    setGroups,
  } = useContext(CurrentUserContext);
  const [category, setCategory] = useState<string>("");
  const [currentGroup, setGroup] = useState<string>("");
  const [showGroupDialog, setGroupDialog] = useState(false);
  const [showReccomendationDialog, setRecommendationDialog] = useState(false);

  useEffect(() => {
    if (setUser && setRecommendations && setGroups) {
      setUser(user);
      setRecommendations(recommendations);
      setGroups(groups);
    }
  }, []);

  //@ts-ignore
  if (!session || (session && session.user.email !== id)) {
    return (
      <div className={styles.notAllowed}>
        <h2>{"Don't meddle into other people's issues little raccoon!"}</h2>
        <h3>Please Sign in to access your own content.</h3>
      </div>
    );
  }

  return (
    <div>
      <div id="authorisedPage">
        <Head>
          <title>Dashboard</title>
          <meta name="Dashboard" content="Interact with recommendations" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <div className={styles.dashboardContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.groupsContainer}>
            <GroupList currentGroup={currentGroup} setGroup={setGroup} />
          </div>
          <div className={styles.groupButton}>
            <CreateButton setDialog={setGroupDialog} text={"Add a new group"} />
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.categoryContainer}>
            <CategorySelector setCategory={setCategory}/>
          </div>
          <div className={styles.recommendationsContainer}>
            <RecommendationList
              category={category}
              currentGroup={currentGroup}
            />
          </div>
          <div className={styles.createRecContainer}>
            <CreateButton
              setDialog={setRecommendationDialog}
              text={"Add a new Recomendation"}
            />
          </div>
        </div>

        <ModalComponent
          category="Group"
          showDialog={showGroupDialog}
          setDialog={setGroupDialog}
        />
        <ModalComponent
          category="Recommendation"
          showDialog={showReccomendationDialog}
          setDialog={setRecommendationDialog}
          currentGroup={currentGroup}
        />
      </div>
    </div>
  );
};

export default Dashboard;

import { useContext } from "react";
import { Group } from "../../types/Group";
import CurrentUserContext from "../../utils/context";
import styles from "./../../styles/GroupList.module.css";

import GroupComponent from "./GroupComponent";

type PropsType = {
  currentGroup: string;
  setGroup: React.Dispatch<React.SetStateAction<string>>;
};

const GroupList = ({ currentGroup, setGroup }: PropsType) => {
  const { currentGroups } = useContext(CurrentUserContext);

  return (
    <div className={styles.groupListContainer}>
      <div className={styles.groupTitle}>
        <h2>Groups</h2>
      </div>
      <div className={styles.groupList}>
        <ul>
          {currentGroups
            ? currentGroups.map((group: Group) => {
                return (
                  <li key={group.id}>
                    <GroupComponent
                      setGroup={setGroup}
                      group={group}
                      currentGroup={currentGroup}
                    />
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    </div>
  );
};

export default GroupList;

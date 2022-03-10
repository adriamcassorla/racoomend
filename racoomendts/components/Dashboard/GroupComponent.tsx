import { MouseEventHandler, useState } from "react";
import { Group } from "../../types/Group";
import styles from "./../../styles/GroupComponent.module.css";

type Props = {
  setGroup: Function;
  group: Group;
  currentGroup: string;
};

const GroupComponent = ({ setGroup, group, currentGroup }: Props) => {
  const [showLink, setShowLink] = useState(false);
  console.log(currentGroup);
  const handleClick = () => {
    setGroup(group.id);
  };

  const toggle = () => {
    setShowLink((showing) => !showing);
  };

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(
      `https://racoomend.vercel.app/api/group/${group.id}`
    );
  };

  const linkClass =
    currentGroup !== group.id
      ? styles.groupContainer
      : styles.selectedContainer;

  return (
    <div onClick={handleClick} className={linkClass}>
      <h3 className={styles.groupName}>{group.name}</h3>
      {showLink ? (
        <div className={styles.linkContainer}>
          <div>
            <p>Share this link!</p>
            <button className={styles.link} onClick={copyToClipBoard}>
              Click here to copy the link
            </button>
          </div>
          <div>
            <button onClick={toggle}>❌</button>
          </div>
        </div>
      ) : (
        <button className={styles.inviteBtn} onClick={toggle}>
          Invite
        </button>
      )}
    </div>
  );
};

export default GroupComponent;

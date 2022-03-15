import { Group } from '../../types/Group';
import styles from './../../styles/GroupComponent.module.css';

import deleteGroup from '../../utils/APIfunctions/deleteGroup';

type Props = {
  setGroup: React.Dispatch<React.SetStateAction<string>>;
  group: Group;
  currentGroup: string;
};

const GroupComponent = ({ setGroup, group, currentGroup }: Props) => {

  const handleClick = () => {
    setGroup(group.id);
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
        <div>
          <button className={styles.inviteBtn} onClick={copyToClipBoard}>
          Copy invite link 📋
          </button>
          <button className={styles.inviteBtn} onClick={() => deleteGroup(group.id)}>
          Delete group ❌
          </button>
        </div>
    </div>
  );
};

export default GroupComponent;

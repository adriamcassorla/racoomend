// Functionality, types and db
import { Group } from '../../types/Group'
import styles from './../../styles/GroupList.module.css'
// Components
import Head from 'next/head'
import GroupComponent from './GroupComponent';
import CreateGroup from './Buttons/CreateGroup';

type Props = {
  groups: Group[];
  currentGroup: string;
  setGroup: Function;
  setGroupDialog: Function;
}

const GroupList = ({ setGroupDialog, groups, currentGroup, setGroup }: Props) => {
  return (
    <div className={styles.groupListContainer}>
      <div className={styles.groupTitle}>
        <h2>Groups you are in</h2>
      </div>
      <div className={styles.groupList}>
        <ul>
          {groups ? groups.map((group: Group) => {
            return (
              <li key={group.id}>
                <GroupComponent setGroup={setGroup} group={group} currentGroup={currentGroup}/>  
              </li>
                )
              }) : null
            }
        </ul>
      </div>
      <div className={styles.groupBotton}>
        <CreateGroup setGroupDialog={setGroupDialog} />
      </div>
    </div>
  )
}

export default GroupList
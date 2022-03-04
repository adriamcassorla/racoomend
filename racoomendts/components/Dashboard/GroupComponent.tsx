import { Group } from "../../types/Group"
import styles from "./../../styles/GroupComponent.module.css"

type Props = {
  setGroup: Function,
  group: Group,
  currentGroup: string,
}

const GroupComponent = ({setGroup, group, currentGroup}: Props) => {

  const handleClick = () => {
    setGroup(group.id);
  }

  return (
    <div onClick={handleClick} className={styles.groupContainer}>
      <h3>{group.name}</h3>
    </div>
  )
}

export default GroupComponent
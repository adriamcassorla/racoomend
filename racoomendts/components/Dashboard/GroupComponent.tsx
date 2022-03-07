import { useState } from "react"
import { Group } from "../../types/Group"
import styles from "./../../styles/GroupComponent.module.css"

type Props = {
  setGroup: Function,
  group: Group,
  currentGroup: string,
}

const GroupComponent = ({setGroup, group, currentGroup}: Props) => {

  const [showLink, setShowLink] = useState(false);

  const handleClick = () => {
    setGroup(group.id);
  }

  const toggle = () => {
    setShowLink(showing => !showing)
  }

  return (
    <div onClick={handleClick} className={styles.groupContainer}>
      <h3>{group.name}</h3>
      {
        showLink ? (
          <div>
            <p>Share this link to join!</p>
            <p>{`http:localhost:3000/api/group/${group.id}`}</p> <button onClick={toggle}>❌</button>
          </div>
        ) :
        <button onClick={toggle}>Invite</button>
      }
    </div>
  )
}

export default GroupComponent
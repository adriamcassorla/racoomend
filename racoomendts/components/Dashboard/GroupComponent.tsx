import { Group } from "../../types/Group"

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
    <div onClick={handleClick}>
      <h3>{group.name}</h3>
    </div>
  )
}

export default GroupComponent
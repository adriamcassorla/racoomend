import Link from "next/link"

type Props = {
  setGroupDialog: Function;
}

const CreateGroup = ( {setGroupDialog}: Props ) => {

  const handleClick = () => {
    setGroupDialog((prevDialog: boolean) => !prevDialog)
    return
  }

  return (
    <div>
      <button onClick={handleClick}>Create a new Group</button>
    </div>
  )
}

export default CreateGroup
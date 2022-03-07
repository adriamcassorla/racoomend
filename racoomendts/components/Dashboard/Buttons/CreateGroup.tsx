import styles from './../../../styles/CreateGroup.module.css'

type Props = {
  setGroupDialog: Function;
}

const CreateGroup = ( {setGroupDialog}: Props ) => {

  const handleClick = () => {
    setGroupDialog((prevDialog: boolean) => !prevDialog)
    return
  }

  return (
    <div >
      <button className={styles.newGroupBtn} onClick={handleClick}><h3>Add a new Group</h3></button>
    </div>
  )
}

export default CreateGroup
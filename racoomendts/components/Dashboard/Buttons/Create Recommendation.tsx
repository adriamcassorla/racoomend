import styles from './../../../styles/createRecommendation.module.css'

type Props = {
  setRecommendationDialog: Function;
}

const CreateRecommendation = ( {setRecommendationDialog}: Props ) => {

  const handleClick = () => {
    setRecommendationDialog((prevDialog: boolean) => !prevDialog);
  }

  return (
    <div className={styles.btnContainer}>
      <button className={styles.newRecommendationBtn} onClick={handleClick}><h3>Add a new Recomendation</h3></button>
    </div>
  )
}

export default CreateRecommendation;
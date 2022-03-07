import { Recommendation } from "../../types/Recommendation"
import CurrentUserContext from '../../utils/context';
import { useContext } from 'react';
import styles from './../../styles/RecommendationComponent.module.css'
import deleteRecommendation from './../../utils/APIfunctions/deleteRecommendation';

type Props = {
  recommendation: Recommendation
  setRecommendations: Function
}

const RecommendationComponent = ({recommendation, setRecommendations}: Props) => {

  const handleDelete = async () => {
    const deletedRecommendation = await deleteRecommendation(recommendation.id);
    // Force parent component to rerender after deletion.
    setRecommendations((prev: Recommendation[]) => {
      return prev.filter((el) => el != recommendation);
    })
    return deletedRecommendation;
  }
  //@ts-ignore
  const {currentUser} = useContext(CurrentUserContext);

  return (
    <div className={styles.recommendationContainer}>
      <div>
        <h4 className={styles.title}>{recommendation.title}</h4>
        <h6 className={styles.oneline}>{recommendation.oneline}</h6>
      </div>
      <div>
        <p>{recommendation.url}</p>
      </div>
      { currentUser.id === recommendation.authorId ?
        <div className={styles.deleteIcon}>
          <button onClick={handleDelete}>❌</button>
        </div> : null
      }
    </div>
  )
}

export default RecommendationComponent
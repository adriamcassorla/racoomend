import { Recommendation } from "../../types/Recommendation"
import CurrentUserContext from '../../utils/context';
import { useContext } from 'react';
import styles from './../../styles/RecommendationComponent.module.css'

type Props = {
  recommendation: Recommendation
}

const RecommendationComponent = ({recommendation}: Props) => {

  //@ts-ignore
  const {currentUser} = useContext(CurrentUserContext);
  console.log(currentUser, 'from recommendation component')

  return (
    <div className={styles.recommendationContainer}>
      <div>
        <h4>{recommendation.title}</h4>
        <p>{recommendation.oneline}</p>
      </div>
      { currentUser.id === recommendation.authorId ?
        <div className={styles.deleteIcon}>
        <p>❌</p>
      </div> : null
      }
    </div>
  )
}

export default RecommendationComponent
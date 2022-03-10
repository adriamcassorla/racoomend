import { Recommendation } from "../../types/Recommendation";
import CurrentUserContext from "../../utils/context";
import { useContext } from "react";
import styles from "./../../styles/RecommendationComponent.module.css";
import deleteRecommendation from "./../../utils/APIfunctions/deleteRecommendation";

type Props = {
  recommendation: Recommendation;
};

const RecommendationComponent = ({ recommendation }: Props) => {
  const { currentUser, setRecommendations } = useContext(CurrentUserContext);
  const handleDelete = async () => {
    const deletedRecommendation = await deleteRecommendation(recommendation.id);
    // Force parent component to rerender after deletion.
    if (setRecommendations)
      setRecommendations((prev: Recommendation[]) => {
        return prev.filter((el) => el != recommendation);
      });
    return deletedRecommendation;
  };

  // TODO: Add loader
  if (!currentUser) return <></>;
  return (
    <div className={styles.recommendationContainer}>
      <div className={styles.dataContainer}>
        <h4 className={styles.title}>{recommendation.title}</h4>
        <p className={styles.oneline}>{recommendation.oneline}</p>
      </div>
      <div className={styles.actions}>
        <a className={styles.url} href={recommendation.url}>
          Click for more external Info!
        </a>
        {currentUser.id === recommendation.authorId ? (
          <div className={styles.deleteIcon}>
            <p>
              Delete
              <button className={styles.dltBtn} onClick={handleDelete}>
                ❌
              </button>
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default RecommendationComponent;

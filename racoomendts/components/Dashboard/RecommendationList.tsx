/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import styles from "../../styles/RecommendationList.module.css";
import { Recommendation } from "../../types/Recommendation";
import RecommendationComponent from "./RecommendationComponent";
import CurrentUserContext from "../../utils/context";

type Props = {
  category: string;
  currentGroup: string;
};

const RecommendationList = ({ category, currentGroup }: Props) => {
  const { currentRecommendations } = useContext(CurrentUserContext);
  const [showingRec, setShowingRec] = useState(currentRecommendations);

  useEffect(() => {
    if (currentRecommendations) {
      setShowingRec(
        currentRecommendations.filter((recommendation: Recommendation) => {
          return (
            recommendation?.categories === category &&
            recommendation?.groupId === currentGroup
          );
        })
      );
    }
  }, [currentRecommendations]);

  const noCategory = () => {
    return (
      <div>
        <h3 className={styles.noSelected}>
          Select a Group from the side and a Category from the list above to
          browse or add new.
        </h3>
        <hr></hr>
      </div>
    );
  };

  return (
    <div className={styles.listContainer}>
      <ul>
        {!category
          ? noCategory()
          : !showingRec
          ? null
          : showingRec.map((recommendation: Recommendation) => {
              return (
                <li key={recommendation.id}>
                  <RecommendationComponent recommendation={recommendation} />
                </li>
              );
            })}
      </ul>
    </div>
  );
};

export default RecommendationList;

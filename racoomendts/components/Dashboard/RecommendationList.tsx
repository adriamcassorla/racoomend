import React from 'react';
import styles from './../styles/RecommendationList.module.css';
import { AppProps } from 'next/dist/shared/lib/router/router';
import { Recommendation } from '../../types/Recommendation';



const RecommendationList = ({ recommendations, category }: AppProps) => {
  
  const noCategory = () => {
    return (
      <h3>Select a Category from the list above</h3>
    )
  }

  return (
    <ul>
      { 
      !category ? noCategory() :
      !recommendations ? null :
      recommendations.filter((recommendation: Recommendation) => {
        return recommendation.categories === category;
      }).map((recommendation: Recommendation) => {
          console.log(recommendation.categories);
          return (<li key={recommendation.id}>
              <h1>
              {recommendation.title}
              </h1>
              <p>{recommendation.oneline}</p>
            </li>)
      }) 
    }
    </ul>
  )
};

export default RecommendationList;

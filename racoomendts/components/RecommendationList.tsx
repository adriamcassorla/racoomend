import React from 'react';
import styles from './../styles/RecommendationList.module.css';
import { AppProps } from 'next/dist/shared/lib/router/router';
import { Recommendation } from '../types/Recommendation';



const RecommendationList = ({ recommendations }: AppProps) => {
  return (
    <ul>
      {recommendations ? recommendations.map((recommendation: Recommendation) => {
          return (<li key={recommendation.id}>
              <h1>
              {recommendation.title}
              </h1>
              <p>{recommendation.oneline}</p>
            </li>)
      }) : null
    }
    </ul>
  )
};

export default RecommendationList;

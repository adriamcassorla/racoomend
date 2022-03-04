import React from 'react';
import styles from '../../styles/RecommendationList.module.css';
import { AppProps } from 'next/dist/shared/lib/router/router';
import { Recommendation } from '../../types/Recommendation';

type Props = {
  recommendations: Recommendation[],
  category: string,
}

const RecommendationList = ({ recommendations, category }: Props) => {
  
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


// import React, { useEffect, useState } from 'react';
// import styles from './../styles/dashboard/RecommendationList.module.css';
// import { AppProps } from 'next/dist/shared/lib/router/router';
// import { Recommendation } from '../../types/Recommendation';
// import { GetServerSideProps } from 'next';

// const RecommendationList = ({ recommendations, category, currentGroup }: AppProps) => {
  

//   const fetchReccomendations = async () => {
//     console.log('You');
//     const rawRecommendations = await fetch('/api/recommendation/' + category + '/' + currentGroup);
//     return recommendations = await rawRecommendations.json();
//   } 

//   useEffect(() => {
//     fetchReccomendations();
//   },[category])


//   const noCategory = () => {
//     return (
//       <h3>Select a Category from the list above</h3>
//     )
//   }
  
//   return (
//     <ul>
//       { 
//       !category ? noCategory() :
//       !recommendations ? null :
//       recommendations.filter((recommendation: Recommendation) => {
//         return recommendation.categories === category;
//       })

//       // .filter((recommendation: Recommendation) => {
//       //   return recommendation.groups?.includes(currentGroup)
//       // })
//       .map((recommendation: Recommendation) => {
//           console.log(recommendation.categories);
//           return (<li key={recommendation.id}>
//               <h1>
//               {recommendation.title}
//               </h1>
//               <p>{recommendation.oneline}</p>
//             </li>)
//       }) 
//     }
//     </ul>
//   )
// };

// export default RecommendationList;
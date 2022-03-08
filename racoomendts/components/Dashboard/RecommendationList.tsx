import React, { useContext, useEffect, useState } from 'react';
import styles from '../../styles/RecommendationList.module.css';
import { Recommendation } from '../../types/Recommendation';
import RecommendationComponent from './RecommendationComponent';
import CurrentUserContext from '../../utils/context';

type Props = {
  category: string,
  currentGroup: string,
}

const RecommendationList = ({ category, currentGroup }: Props) => {

  const { currentRecommendations } = useContext(CurrentUserContext);
  const [ showingRec, setShowingRec ] = useState(currentRecommendations);

  useEffect(() => {
    setShowingRec(currentRecommendations);
  }, [currentRecommendations])

  const noCategory = () => {
    return (
      <div>
        <h3 className={styles.noSelected}>Select a Group from the side and a Category from the list above to browse or add new.</h3>
        <hr></hr>
      </div>
    )
  }
  
  return (
    <div className={styles.listContainer}>
      <ul>
        { 
        !category ? noCategory() :
        !currentRecommendations ? null :
        currentRecommendations.filter((recommendation: Recommendation) => {
          return (recommendation.categories === category && recommendation.groupId === currentGroup)
        })
        .map((recommendation: Recommendation) => {
          return (<li key={recommendation.id}>
                <RecommendationComponent recommendation={recommendation} />
              </li>)
        }) 
      }
      </ul>
      
    </div>
  )
};

export default RecommendationList;


// import React, { useEffect, useState } from 'react';
// import styles from './../styles/dashboard/RecommendationList.module.css';
// import { AppProps } from 'next/dist/shared/lib/router/router';
// import { Recommendation } from '../../types/Recommendation';
// import { GetServerSideProps } from 'next';

// const RecommendationList = ({ currentRecommendations, category, currentGroup }: AppProps) => {
  

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
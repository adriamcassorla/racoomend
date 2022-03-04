import { Recommendation } from "../../types/Recommendation"

type Props = {
  recommendation: Recommendation
}

const RecommendationComponent = ({recommendation}: Props) => {
  return (
    <div>
      <h4>{recommendation.title}</h4>
      <p>{recommendation.oneline}</p>
    </div>
  )
}

export default RecommendationComponent
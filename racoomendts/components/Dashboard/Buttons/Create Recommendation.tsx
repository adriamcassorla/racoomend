import Link from "next/link"

type Props = {
  setRecommendationDialog: Function;
}

const CreateRecommendation = ( {setRecommendationDialog}: Props ) => {

  const handleClick = () => {
    setRecommendationDialog((prevDialog: boolean) => !prevDialog);
  }

  return (
    <div>
        <button onClick={handleClick}>Create a New Recommendation</button>
    </div>
  )
}

export default CreateRecommendation;
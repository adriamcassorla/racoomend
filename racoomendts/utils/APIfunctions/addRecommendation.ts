import { Recommendation } from "../../types/Recommendation";

const addRecommendation = async (e: React.FormEvent, title: string, oneline: string, url: string, categories: string ) => {
  e.preventDefault()
  try {
    const rawRecommendation = await fetch('/api/recommendation/newRecommend', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        title, oneline, url, categories, 
        authorId: '5d1a59e8-9113-4df6-bbfe-efaeb3baf4cc',
        groupId: '32c8c42d-8449-4cbd-b419-07ca48680da2', })
    })
    const recommendation = rawRecommendation.json();
    return recommendation;

  } catch (e) {
    console.error(e);
  }
}

export default addRecommendation
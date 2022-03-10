import { Recommendation } from "../../types/Recommendation";

// Try to reduce this.
const addRecommendation = async (title: string, oneline: string, url: string, categories: string, authorId: string, groupId: string) => {
  try {
    const rawRecommendation = await fetch('/api/recommendation/newRecommend', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        title, oneline, url, categories,
        authorId,
        groupId,
      })
    })
    const recommendation = rawRecommendation.json();
    return recommendation;

  } catch (e) {
    console.error(e);
  }
}

export default addRecommendation
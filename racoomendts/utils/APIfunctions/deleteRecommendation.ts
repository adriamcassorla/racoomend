const deleteRecommendation = async ( id: string ) => {
  try {
    const rawRecommendation = await fetch('/api/recommendation/deleteRecommend', {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ id })
    })
    const recommendation = rawRecommendation.json();
    return recommendation;

  } catch (e) {
    console.error(e);
  }
}

export default deleteRecommendation
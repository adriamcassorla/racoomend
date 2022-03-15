const deleteGroup = async (id: string) => {
  try {
    const rawGroup = await fetch('/api/group', {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ id })
    })
    const group = rawGroup.json();
    return group;

  } catch (e) {
    console.error(e);
  }
}

export default deleteGroup

const fetcher = async (url, token) => {
  const res = await fetch(url, {
    method: 'GET',
    headers: new Headers({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    }),
    credentials: 'same-origin'
  });

  return res.json();
};

export default fetcher;
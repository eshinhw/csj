export async function getArticles() {
  const res = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${process.env.NYT_API}`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}


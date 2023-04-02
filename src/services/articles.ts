const sections = ["world", "canada", "food", "beauty", "realty", "opinion"];

export async function getArticles(section: string) {
  let specified: string = "";
  switch (section) {
    case "world":
      specified = section;
    case "canada":
      specified = "us";
    case "food":
      specified = section;
    case "beauty":
      specified = "health";
    case "realty":
      specified = "realestate";
    case "opinion":
      specified = section;
  }
  const res = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/${specified}.json?api-key=${process.env.NYT_API}`
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

export async function getTopStories() {
  const res = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${process.env.NYT_API}`
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

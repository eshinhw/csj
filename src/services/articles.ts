const sections = ["canada", "beauty", "realty"];

export async function getArticles(section: string) {
  // switch (section) {
  //   case "canada":
  //     res = await fetch(
  //       `https://api.nytimes.com/svc/topstories/v2/us.json?api-key=${process.env.NYT_API}`
  //     );
  //   case "beauty":
  //     res = await fetch(
  //       `https://api.nytimes.com/svc/topstories/v2/health.json?api-key=${process.env.NYT_API}`
  //     );
  //   case "realty":
  //     res = await fetch(
  //       `https://api.nytimes.com/svc/topstories/v2/realestate.json?api-key=${process.env.NYT_API}`
  //     );
  //   default:

  // }

  if (section === "canada") {
    section = "us";
  } else if (section === "realty") {
    section = "realestate";
  }

  const res = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.NYT_API}`
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

export async function getTopStories(topic:string) {
  
  const res = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=${process.env.NYT_API}`
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

/**
 * Retrieves all top headline news
 * @returns
 */
export default async function getTopHeadlines() {
  let url = new URL("https://newsapi.org/v2/top-headlines");
  url.searchParams.append("country", "ca");
  url.searchParams.append("sortBy", "popularity");
  url.searchParams.append("apiKey", process.env.NEXT_PUBLIC_NEWSAPI!);
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

/**
 * Get articles in the given category parameter
 * @param category
 * @returns
 */
export async function getArticlesByCategory(category: string) {
  let url = new URL("https://newsapi.org/v2/everything");
  url.searchParams.append("q", category);
  url.searchParams.append("sortBy", "popularity");
  url.searchParams.append("apiKey", process.env.NEXT_PUBLIC_NEWSAPI!);
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getLatestArticlesInCanada() {
  const today = new Date();
  const targetDate = new Date(today.setDate(today.getDate() - 3));
  let url = new URL("https://newsapi.org/v2/everything");
  url.searchParams.append("from", targetDate.toString());
  url.searchParams.append("language", "en");
  url.searchParams.append("q", "Canada");
  url.searchParams.append("sortBy", "popularity");
  url.searchParams.append("apiKey", process.env.NEXT_PUBLIC_NEWSAPI!);
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

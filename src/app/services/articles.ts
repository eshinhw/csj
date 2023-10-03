// import { articles } from "../../data/articles";

// export type Article = {
//   id: string;
//   title: string;
//   description: string;
//   body: string;
//   date: string;
//   author: string;
//   category: string;
//   image: string;
//   featured: boolean;
// };

// export function getFeaturedArticles() {
//   return articles.filter((article) => article.featured);
// }

// export function getNonFeaturedArticles() {
//   return articles.filter((article) => !article.featured);
// }

// export function getArticlesByCategory(category: string) {
//   return articles.filter((article) => article.category === category);
// }

// export function getLocalArticles() {
//   return articles.sort((a, b) => (a.date > b.date ? -1 : 1));
// }

// export function getArticleData(id: string): Article {
//   const article = articles.find((article) => article.id === id);
//   if (article !== undefined) {
//     return article;
//   } else {
//     throw Error("article not found");
//   }
// }

/**
 * Retrieves all top headline news
 * @returns
 */
export default async function getTopHeadlines() {
  let url = new URL("https://newsapi.org/v2/top-headlines");
  url.searchParams.append("country", "ca");
  url.searchParams.append("sortBy", "popularity");
  const res = await fetch(url + `&apiKey=${process.env.NEXT_PUBLIC_NEWSAPI}`);
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

/**
 * Get articles in the given category parameter
 * @param category
 * @returns
 */
export async function getArticlesByCategory(category: string) {
  let url = `https://newsapi.org/v2/everything?q=canada + ${category}&sortBy=popularity&apiKey=${process.env.NEXT_PUBLIC_NEWSAPI}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getLatestArticlesInCanada() {
  const currentDate = new Date().toISOString().slice(0, 10);
  console.log(currentDate);
  let url = `https://newsapi.org/v2/everything?language=en&q=Canada&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_NEWSAPI}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

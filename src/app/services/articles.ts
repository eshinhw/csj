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

// all articles
export default async function getTopHeadlines() {
  let url = `https://newsapi.org/v2/top-headlines?country=ca&sortBy=popularity&apiKey=${process.env.NEXT_PUBLIC_NEWSAPI}`;
  console.log(url);
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// articles by category
export async function getArticlesByCategory(category: string) {
  /**
   * Get articles in the given category parameter
   * @param {string} category - the category of articles
   */
  let url = `https://newsapi.org/v2/top-headlines?country=ca&category=${category}&sortBy=popularity&apiKey=${process.env.NEXT_PUBLIC_NEWSAPI}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

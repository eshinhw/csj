import { articles } from "../../../data/articles";

export type Article = {
  id: string;
  title: string;
  description: string;
  body: string;
  date: string;
  author: string;
  category: string;
  image: string;
  featured: boolean;
};

export function getFeaturedArticles() {
  return articles.filter((article) => article.featured);
}

export function getNonFeaturedArticles() {
  return articles.filter((article) => !article.featured);
}

export function getArticlesByCategory(category: string) {
  return articles.filter((article) => article.category === category);
}

export function getLocalArticles() {
  return articles.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getArticleData(id: string): Article {
  const article = articles.find((article) => article.id === id);
  if (article !== undefined) {
    return article;
  } else {
    throw Error("article not found");
  }
}

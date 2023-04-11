import { readFile } from "fs/promises";
import path from "path";

export type Article = {
  id: number;
  title: string;
  description: string;
  body: string;
  date: Date;
  author: string;
  category: string;
  image: string;
  articleName: string;
  featured: boolean;
};

export type ArticleData = Article & { content: string };

export function getFeaturedArticles() {
  return getLocalArticles().then((articles) => articles.filter((article) => article.featured));
}

export function getNonFeaturedArticles() {
  return getLocalArticles().then((articles) => articles.filter((article) => !article.featured));
}

export function getArticlesByCategory(category: string) {
  return getLocalArticles().then((articles) =>
    articles.filter((article) => article.category === category)
  );
}

export async function getLocalArticles() {
  const filePath = path.join(process.cwd(), "data", "articles.json");
  return readFile(filePath, "utf-8")
    .then<Article[]>((data) => JSON.parse(data))
    .then((articles) => articles.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getArticleData(articleName: string): Promise<ArticleData> {
  console.log(articleName);
  const filePath = path.join(process.cwd(), "data", "articles", `${articleName}.md`);
  console.log(filePath)
  const metadata = await getLocalArticles().then(articles => articles.find(article => article.articleName === articleName));
  if (!metadata) throw new Error(`${articleName} DNE.`)

  const content = await readFile(filePath, 'utf-8');
  return {...metadata, content};
}

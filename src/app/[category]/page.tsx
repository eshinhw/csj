import ArticleLayout from "@/components/article-layout";
import { getArticlesByCategory } from "../services/articles";

export type Props = {
  params: {
    category: string;
  };
};

export default async function CategoryPage({ params }: Props) {
  const articlesData = await getArticlesByCategory(params.category);
  const articles = articlesData.articles;
  return (
    <section className="mx-2 my-4 lg:mx-20 xl:mx-40">
      <ArticleLayout articles={articles} />
    </section>
  );
}

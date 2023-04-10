import ArticleGrid from "@/app/components/article-grid";
import SectionTitle from "@/app/components/section-title";
import { getArticlesByCategory } from "@/app/services/articles";
import { FirstCharUpperCase } from "@/app/services/utils";

export type Props = {
  params: {
    category: string;
  };
};

export default async function CategoryPage({ params }: Props) {
  const articles = await getArticlesByCategory(params.category);
  return (
    <section className="my-4 lg:mx-20 xl:mx-40">
      <SectionTitle title={FirstCharUpperCase(params.category)} />
      <ArticleGrid articles={articles} />
    </section>
  );
}

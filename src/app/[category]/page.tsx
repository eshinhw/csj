import ArticleGrid from "@/components/article-grid";
import SectionTitle from "@/app/components/section-title";
import { FirstCharUpperCase } from "@/app/services/utils";

export type Props = {
  params: {
    category: string;
  };
};

export default async function CategoryPage({ params }: Props) {
  // const articles = getArticlesByCategory(params.category);
  return (
    <section className="mx-2 my-4 lg:mx-20 xl:mx-40">
      <SectionTitle title={FirstCharUpperCase(params.category)} />
      {/* <ArticleGrid articles={articles} /> */}
    </section>
  );
}

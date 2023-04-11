import { getLocalArticles } from "@/app/services/articles";
import React from "react";
import ArticleGrid from "./article-grid";
import SectionTitle from "./section-title";

export default async function FeaturedArticles() {
  const featured = await getLocalArticles();

  return (
    <div className="mx-2 lg:mx-20 xl:mx-40">
      <SectionTitle title="Featured Articles" />
      <ArticleGrid articles={featured} />
    </div>
  );
}

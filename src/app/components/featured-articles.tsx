import { getLocalArticles } from "@/app/services/articles";
import React from "react";
import ArticleGrid from "./article-grid";

export default async function FeaturedArticles() {
  const featured = await getLocalArticles();

  return (
    <div className="lg:mx-20 xl:mx-40">
      <h1 className="text-2xl font-bold my-5">Featured Articles</h1>
      <ArticleGrid articles={featured} />
    </div>
  );
}

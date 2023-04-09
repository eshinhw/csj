import ArticleGrid from "@/app/components/article-grid";
import SectionTitle from "@/app/components/section-title";
import { getArticles, getArticlesByCategory } from "@/app/services/articles";
import { getSectionData } from "@/app/services/sections";
import { FirstCharUpperCase } from "@/app/services/utils";
import Image from "next/image";
import React from "react";

export type Props = {
  params: {
    page: string;
  };
};

export default async function page({ params }: Props) {
  const articles = await getArticlesByCategory(params.page);
  return (
    <section className="my-4 lg:mx-20 xl:mx-40">
      <SectionTitle title={FirstCharUpperCase(params.page)} />
      <ArticleGrid articles={articles} />
    </section>
  );
}

import ArticleGrid from "@/app/components/article-grid";
import SectionTitle from "@/app/components/section-title";
import { getArticles, getArticlesByCategory } from "@/app/services/articles";
import { getSectionData } from "@/app/services/sections";
import Image from "next/image";
import React from "react";

export type Props = {
  params: {
    page: string;
  };
};

const convertToTitle = (str: string) => {
  if (str.includes("_")) {
    // replace _ to an empty space
    str = str.replace("_", " ");
    // "real estate" to "Real Estate"
    str =
      str.charAt(0).toUpperCase() +
      str.slice(1, str.indexOf(" ") + 1) +
      str.charAt(str.indexOf(" ") + 1).toUpperCase() +
      str.slice(str.indexOf(" ") + 2);
    return str;
  } else {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
};

export default async function page({ params }: Props) {
  const articles = await getArticlesByCategory(params.page);
  return (
    <section className="my-4 lg:mx-20 xl:mx-40">
      <SectionTitle title={params.page.charAt(0).toUpperCase() + params.page.slice(1)} />
      <ArticleGrid articles={articles} />
    </section>
  );
}

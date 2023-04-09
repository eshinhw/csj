import React from "react";
import { getLocalArticles } from "../services/articles";
import ArticleCard from "./article-card";
import MultiCarousel from "./multi-carousel";

export default async function CarouselArticles() {
  const articles = await getLocalArticles();
  return (
    <section className="lg:mx-20 xl:mx-40">
      <h2 className="text-2xl text-bold my-5">You May Like</h2>
      <MultiCarousel>
        {articles.map((article, idx) => (
          <ArticleCard key={idx} article={article} />
        ))}
      </MultiCarousel>
    </section>
  );
}

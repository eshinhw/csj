import React from "react";
import { getLocalArticles } from "../services/articles";
import ArticleCard from "./article-card";
import MultiCarousel from "./multi-carousel";
import SectionTitle from "./section-title";

export default async function CarouselArticles() {
  const articles = await getLocalArticles();
  return (
    <section className="lg:mx-20 xl:mx-40">
      <SectionTitle title="Trending" />
      <MultiCarousel>
        {articles.map((article, idx) => (
          <ArticleCard key={idx} article={article} />
        ))}
      </MultiCarousel>
    </section>
  );
}

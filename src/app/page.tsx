import type { Metadata } from "next";
import getTopHeadlines, {
  getLatestArticlesInCanada,
} from "./services/articles";
import SectionTitle from "../components/section-title";
import Link from "next/link";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import VerticalCarousel from "@/components/vertical-carousel";
import ArticleLayout from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Yonge Street Journal",
};

export default async function HomePage() {
  const topHeadlinesData = await getTopHeadlines();
  const canadaArticlesData = await getLatestArticlesInCanada();
  const headlineArticles = topHeadlinesData.articles;
  // console.log(headlineArticles);
  const canadaArticles = canadaArticlesData.articles;
  return (
    <div className="mx-2 lg:mx-20 xl:mx-40">
      <div className="my-8 border-y-2">
        <VerticalCarousel headlines={headlineArticles} />
      </div>
      <ArticleLayout articles={canadaArticles.slice(0, 12)} />
    </div>
  );
}

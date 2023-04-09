import React from "react";
import Image from "next/image";
import { getLocalArticles, getTopStories } from "@/app/services/articles";
import FeaturedArticles from "../components/featured-articles";
import CarouselArticles from "../components/carousel";

const topics = [
  "arts",
  "automobiles",
  "books",
  "business",
  "fashion",
  "food",
  "health",
  "home",
  "insider",
  "magazine",
  "movies",
  "nyregion",
  "obituaries",
  "opinion",
  "politics",
  "realestate",
  "science",
  "sports",
  "sundayreview",
  "technology",
  "theater",
  "t-magazine",
  "travel",
  "upshot",
  "us",
  "world",
];

export default async function HomePage() {
  // const topStories = await getTopStories(topics[Math.floor(Math.random() * topics.length)]);

  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <FeaturedArticles />
      {/* @ts-expect-error Async Server Component */}
      <CarouselArticles />
      {/* Top Stories */}
      {/* <div>
        <h1 className="text-xl font-bold py-2 mx-2 cursor-default lg:text-3xl lg:mx-40">
          Top Stories
        </h1>
        <div className="grid lg:gap-3 lg:mx-40 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {topStories.results.map((article: any, idx: number) => (
            <div
              key={idx}
              className="block justify-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 my-3 cursor-pointer w-7/8"
            >
              <div className="flex flex-col justify-center hover:text-gray-500">
                <Image
                  src={
                    article.multimedia && article.multimedia.length
                      ? article.multimedia[0].url
                      : "https://source.unsplash.com/random"
                  }
                  alt={
                    article.multimedia && article.multimedia.length
                      ? article.multimedia.caption
                      : ""
                  }
                  width={300}
                  height={300}
                  className="object-cover w-full max-h-1/2 cursor"
                />
                <h1 className="font-bold text-base">{article.title}</h1>
                <p className="">{article.abstract}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
}

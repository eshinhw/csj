import React from "react";
import data from "../../data.json";
import Image from "next/image";
import Link from "next/link";
import { getArticles, getTopStories } from "@/services/articles";

// const handleRoutes = (str:string) => {

//   if

// }

const header_sections = ["World", "Canada", "Food", "Health", "Realty", "Opinion"];

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
  const topStories = await getTopStories(topics[Math.floor(Math.random() * topics.length)]);

  return (
    <>
      {/* Laptop: Sections */}
      <div className="lg:mx-20 xl:mx-40">
        <div className="hidden lg:flex flex-row gap-8 justify-center text-xs my-3">
          {header_sections.map((section, idx) => (
            <Link key={idx} href={section.toLowerCase()} className="cursor-pointer">
              {section}
            </Link>
          ))}
        </div>
        <div className="border-double border-t-8"></div>
      </div>

      {/* Top Stories */}
      <div>
        <h1 className="text-xl font-bold py-4 cursor-default lg:text-3xl lg:mx-40">Top Stories</h1>
        <div className="grid lg:gap-3 lg:mx-40 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {topStories.results.map((article: any, idx: number) => (
            <div
              key={idx}
              className="block justify-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 my-3 cursor-pointer w-7/8"
            >
              <div className="flex flex-col justify-center hover:text-gray-500">
                <Image
                  src={(article.multimedia.length === 0) ? "https://source.unsplash.com/random" : article.multimedia[0].url}
                  alt={article.multimedia.caption}
                  width={300}
                  height={300}
                  className="object-cover w-full max-h-1/2 cursor"
                />
                <h1 className="font-bold ">{article.title}</h1>
                <p className="">{article.abstract}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

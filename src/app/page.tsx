import React from "react";
import data from "../../data.json";
import Image from "next/image";
import Link from "next/link";

const handleRoutes = (section: string) => {
  console.log();
  if (decodeURI(section).includes(" ")) {
    return section.replace(" ", "_").toLowerCase();
  } else {
    return section.toLowerCase();
  }
};

const header_sections = [
  "World",
  "Canada",
  "Toronto",
  "Food",
  "Beauty",
  "Real Estate",
  "Marketplace",
  "Promo",
  "Opinion",
];

const page_sections = [
  "Top Headlines",
  "World",
  "Canada",
  "Toronto",
  "Food",
  "Beauty",
  "Real Estate",
  "Marketplace",
  "Promotions",
  "Opinion",
];

export default function HomePage() {
  return (
    <>
      {/* Laptop: Sections */}
      <div className="lg:mx-20 xl:mx-40">
        <div className="hidden lg:flex flex-row gap-8 justify-center text-xs my-3">
          {header_sections.map((section, idx) => (
            <Link key={idx} href={handleRoutes(section)} className="cursor-pointer">
              {section}
            </Link>
          ))}
        </div>
        <div className="border-double border-t-8"></div>
      </div>
      <div>
        {page_sections.map((section, idx) => (
          <>
            <h1 key={idx} className="text-xl font-bold py-4 cursor-default lg:text-3xl lg:mx-40">
              {section}
            </h1>
            <div className="grid lg:gap-3 lg:mx-40 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {data.results.slice(0, 4).map((article: any, idx: number) => (
                <div
                  key={idx}
                  className="block justify-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 my-3 cursor-pointer w-7/8"
                >
                  <div className="flex flex-col justify-center hover:text-gray-500">
                    <Image
                      src="https://source.unsplash.com/random"
                      alt="random"
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
          </>
        ))}
      </div>
    </>
  );
}

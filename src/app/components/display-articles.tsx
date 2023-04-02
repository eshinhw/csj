import React from "react";
import data from "../../../data.json";
import Image from "next/image";

async function getArticles() {
  const res = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${process.env.NYT_API}`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const sections = [
  "Top Headlines",
  "World",
  "Canada",
  "Toronto",
  "Food",
  "Beauty",
  "Real Estate",
  "Marketplace",
  "Hot Deals",
  "Opinion",
];

export default function DisplayArticles() {
  return (
    <div>
      {sections.map((section, idx) => (
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
  );
}

import { getArticles } from "@/app/services/articles";
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
  const subsections = getSectionData(params.page);
  const sectionArticles = await getArticles(params.page);
  console.log(sectionArticles)
  console.log(sectionArticles.results[0].multimedia)
  return (
    <>
      <div className="py-4 lg:mx-20 xl:mx-40">
        <div className="text-xl lg:text-4xl font-bold">{convertToTitle(params.page)}</div>
        <div className="hidden lg:flex flex-row w-6/7 my-3 gap-3">
          {subsections.map((subsec, idx) => (
            <div key={idx} className="cursor-pointer">
              {subsec}
            </div>
          ))}
        </div>
        <div className="grid lg:gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sectionArticles.results.filter((obj:any) => obj.title !== "").map((article: any, idx: number) => (
            <div
              key={idx}
              className="block justify-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 my-3 cursor-pointer w-7/8"
            >
              <div className="flex flex-col justify-center hover:text-gray-500">
                <Image
                  src={article.multimedia[0].url}
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

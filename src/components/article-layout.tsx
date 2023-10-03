import Link from "next/link";
import React from "react";

type Props = {
  articles: Article[];
};

export default function ArticleLayout({ articles }: Props) {
  return (
    <>
      <div className="flex justify-center border-black">
        <div className="w-3/12">
          <div className="flex-col">
            {articles.slice(0, 5).map((article, idx) => (
              <div key={idx}>
                <Link href={article.url} target="_blank">
                  <h1 className="my-2 text-xl font-bold">{article.title}</h1>
                </Link>
                <p className="text-sm">{article.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-6/12">
          <div className="flex-col">
            {articles.slice(5, 8).map((article, idx) => (
              <div className="mx-4 my-4" key={idx}>
                <Link href={article.url} target="_blank">
                  <img src={article.urlToImage} className="w-full" />
                  <h1 className="my-2 text-3xl font-bold text-center">
                    {article.title}
                  </h1>
                </Link>
                <p className="text-sm text-center">{article.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-3/12">
          <div className="flex-col">
            {articles.slice(8, 14).map((article, idx) => (
              <div key={idx}>
                <Link href={article.url} target="_blank">
                  <h1 className="my-2 text-xl font-bold">{article.title}</h1>
                </Link>
                <p className="text-sm">{article.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

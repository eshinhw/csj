import React from "react";
import { Article } from "../services/articles";
import Link from "next/link";
import Image from "next/image";

import cardImage from "../../../public/images/icons/amex.png";

export default function ArticleCard({
  article: { id, title, description, date, category, image, articleName, featured },
}: {
  article: Article;
}) {
  return (
    // make a card component with tailwind css
    <article className="rounded-md overflow-hidden shadow-md hover:shadow-2xl">
      <Link href={`/${category}/${articleName}`}>
        <Image src={`/images/thumbnails/${image}`} alt="dp" width={300} height={300} className="w-full h-40 max-h-40 object-fill"/>
        <div className="flex flex-col items-center p-4">
          <time className="self-end text-gray-700">{date.toString()}</time>
          <h1 className="font-bold text-xl my-2 w-full truncate">{title}</h1>
          <p className="w-full text-center truncate">{description}</p>
          <span className="text-sm rounded-lg bg-neutral-300 px-2 my-2">{category.toUpperCase()}</span>
        </div>
      </Link>
    </article>
  );
}

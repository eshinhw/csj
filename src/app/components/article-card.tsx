import React from "react";
import { Article } from "../services/articles";
import Link from "next/link";
import Image from "next/image";
import { AiTwotoneCalendar } from "react-icons/ai";

export default function ArticleCard({
  article: { id, title, description, date, category, image, articleName, featured },
}: {
  article: Article;
}) {
  return (
    // make a card component with tailwind css
    <article className="flex flex-col rounded-md overflow-hidden shadow-md h-full hover:shadow-2xl">
      <Link href={`/${category}/${articleName}`}>
        <Image
          src={`/images/thumbnails/${image}`}
          alt="dp"
          width={300}
          height={300}
          className="w-full h-40 max-h-40 object-fill"
        />
        <div className="flex flex-col items-center p-4">
          <div className="flex gap-2 items-center self-end">
            <span className="text-sm rounded-lg bg-neutral-300 px-2 my-2">
              {category.toUpperCase()}
            </span>
            <div className="flex items-center gap-1">
              <AiTwotoneCalendar className="w-3 h-3" />
              <time className="text-gray-700">{date.toString()}</time>
            </div>
          </div>
          <h1 className="grow font-bold text-xl my-2 w-full">{title}</h1>
          <p className="italic">{description}</p>
        </div>
      </Link>
    </article>
  );
}

import React from "react";
// import { Article } from "../app/services/articles";
import Link from "next/link";
import Image from "next/image";
import { AiTwotoneCalendar } from "react-icons/ai";

export default function ArticleCard() {
  return <></>;
}

// export default function ArticleCard({
//   article: { id, title, description, date, category, image, featured },
// }: {
//   article: Article;
// }) {
//   return (
//     // make a card component with tailwind css
//     <article className="flex flex-col h-full overflow-hidden rounded-md shadow-md hover:shadow-2xl">
//       <Link href={`/${category}/${id}`}>
//         <Image
//           src={`/images/thumbnails/${image}`}
//           alt="dp"
//           width={300}
//           height={300}
//           className="object-fill w-full h-40 max-h-40"
//         />
//         <div className="flex flex-col items-center p-4">
//           <div className="flex items-center self-end gap-2">
//             <span className="px-2 my-2 text-sm rounded-lg bg-neutral-300">
//               {category.toUpperCase()}
//             </span>
//             <div className="flex items-center gap-1">
//               <AiTwotoneCalendar className="w-3 h-3" />
//               <time className="text-gray-700">{date.toString()}</time>
//             </div>
//           </div>
//           <h1 className="w-full my-2 text-xl font-bold grow">{title}</h1>
//           <p className="italic">{description}</p>
//         </div>
//       </Link>
//     </article>
//   );
// }

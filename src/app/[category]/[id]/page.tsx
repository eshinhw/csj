import Image from "next/image";

export default async function ArticleContentPage({
  params: { id },
}: {
  params: { id: string };
}) {
  // const article = getArticleData(id);

  return (
    <></>
    // <article className="my-3 lg:mx-20 xl:mx-40">
    //   <div className="flex flex-col w-full">
    //     <h1 className="text-[38px] font-bold mt-2">{article.title}</h1>
    //     <h3 className="text-[20px] my-2">{article.description}</h3>
    //     <span className="my-2">{`${
    //       article.author
    //     } | Posted: ${article.date.toString()}`}</span>
    //     <Image
    //       src={`/images/thumbnails/${article.image}`}
    //       alt=""
    //       width={300}
    //       height={300}
    //       className="w-full h-64"
    //     />
    //     <p className="mt-4 text-md">{article.body}</p>
    //   </div>
    // </article>
  );
}

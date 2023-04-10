import MarkdownViewer from "@/app/components/markdown-viewer";
import { getArticleData } from "@/app/services/articles";

export default async function ArticleContentPage({
  params: { articleName },
}: {
  params: { articleName: string };
}) {
  console.log(articleName)
  const article = await getArticleData(articleName);

  return (
    <>
      <h1>{article.title}</h1>
      <pre>{article.content}</pre>
    </>
  );
}

import FeaturedArticles from "../components/featured-articles";
import CarouselArticles from "../components/carousel";

async function getArticles() {
  let url =
    "https://newsapi.org/v2/everything?" +
    "q=Apple&" +
    "from=2023-09-20&" +
    "sortBy=popularity&" +
    "apiKey=676071ea907843b9b14522923aa63c1a";
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function HomePage() {
  const articles = await getArticles();
  console.log(articles);
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <FeaturedArticles />
      {/* @ts-expect-error Async Server Component */}
      <CarouselArticles />
    </>
  );
}

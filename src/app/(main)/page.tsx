import FeaturedArticles from "../components/featured-articles";
import CarouselArticles from "../components/carousel";

export default async function HomePage() {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <FeaturedArticles />
      {/* @ts-expect-error Async Server Component */}
      <CarouselArticles />
    </>
  );
}

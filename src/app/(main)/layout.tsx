import Link from "next/link";
import BottomNav from "../components/bottom-nav";
import Footer from "../components/footer";
import Header from "../components/header";
import "../globals.css";
import { Work_Sans } from "next/font/google";
import { getLocalArticles } from "../services/articles";

const work_sans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "The Yonge Street Journal",
  description: "Fair and Balanced News in Canada",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const articles = await getLocalArticles();
  const categories = [...new Set(articles.map(article => article.category))].sort()
  return (
    <html lang="en" className={work_sans.className}>
      <body>
        <Header />
        {/* Laptop: Sections */}
        <div className="mx-2 lg:mx-20 xl:mx-40">
          <div className="hidden lg:flex flex-row gap-8 justify-center text-xs my-3">
            {categories.map((section, idx) => (
              <Link key={idx} href={section.toLowerCase()} className="cursor-pointer">
                {section.toUpperCase()}
              </Link>
            ))}
          </div>
          <div className="border-double border-t-8"></div>
        </div>
        {children}
        <BottomNav />
        <Footer />
      </body>
    </html>
  );
}

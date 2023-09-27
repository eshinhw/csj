import BottomNav from "@/components/bottom-nav";
import Footer from "@/components/footer";
import Header from "@/components/header";
import "./globals.css";
import { Work_Sans } from "next/font/google";
import CategorySection from "@/components/category-section";

const work_sans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "The Yonge Street Journal",
  description: "All Eyes on Yonge Street",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={work_sans.className}>
      <body>
        <Header />
        <CategorySection />
        {children}
        <BottomNav />
        <Footer />
      </body>
    </html>
  );
}

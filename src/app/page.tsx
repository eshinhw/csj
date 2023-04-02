import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import TopBar from "@/components/top-bar";

import TopSections from "@/components/top-sections";
import Footer from "@/components/footer";
import BottomNav from "@/components/bottom-nav";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <TopBar />
      <TopSections />
      <BottomNav />
      <Footer />
    </>
  );
}

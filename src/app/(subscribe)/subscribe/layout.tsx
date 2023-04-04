import BottomNav from "@/components/bottom-nav";
import "../../globals.css";
import Footer from "@/components/footer";

export const metadata = {
  title: "The Yonge Street Journal",
  description: "Fair and Balanced News in Canada",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}

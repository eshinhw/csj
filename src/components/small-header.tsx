import { IM_Fell_French_Canon_SC } from "next/font/google";
import GoogleIcon from "../../../../public/images/icons/google.png";
import FacebookIcon from "../../../../public/images/icons/facebook.png";
import Image from "next/image";

const fell_french = IM_Fell_French_Canon_SC({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function SmallHeader() {
  return (
    <header className="my-5 text-2xl text-center">
      <h1 className={fell_french.className}>The Yonge Street Journal</h1>
    </header>
  );
}

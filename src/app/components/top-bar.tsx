import { GiHamburgerMenu } from "react-icons/gi";
import { DM_Serif_Display } from "next/font/google";
import { IM_Fell_French_Canon_SC } from "next/font/google";
import { IM_Fell_Double_Pica_SC } from "next/font/google";
import { RxMagnifyingGlass } from "react-icons/rx";
import { FaUser } from "react-icons/fa";

const serif_display = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const fell_french = IM_Fell_French_Canon_SC({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const double_pica = IM_Fell_Double_Pica_SC({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function TopBar() {
  const now = new Date();
  const getDay = () => {
    console.log(now.getDay());
    switch (now.getDay()) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
        return "";
    }
  };

  const getMonth = () => {
    switch (now.getMonth()) {
      case 0:
        return "January";
      case 1:
        return "February";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6:
        return "July";
      case 7:
        return "August";
      case 8:
        return "September";
      case 9:
        return "October";
      case 10:
        return "November";
      case 11:
        return "December";
      default:
        return "";
    }
  };
  return (
    <>
      {/* Mobile Top Bar */}
      <div className="flex flex-row items-center justify-between my-3 lg:hidden">
        <GiHamburgerMenu className="w-8 h-8" />
        <span className="text-xl lg:text-3xl">
          <h1 className={fell_french.className}>The Yonge Street Journal</h1>
        </span>
        <FaUser className="w-8 h-8" />
      </div>
      {/* Mobile Date and Subscribe */}
      <div className="flex border-solid border-t-2 text-sm justify-between lg:hidden">
        <div className="">
          {getDay()}, {getMonth()} {now.getDate()}, {now.getFullYear()}
        </div>
        <a className="">Subsribe</a>
      </div>

      {/* Laptop Top Bar */}
      <div className="hidden my-5 mx-40 lg:flex flex-row items-center justify-between">
        <div className="flex flex-row gap-5 justify-center">
          <GiHamburgerMenu className="w-6 h-6 cursor-pointer" />
          <RxMagnifyingGlass className="w-6 h-6 cursor-pointer" />
        </div>

        <div className="hidden lg:flex lg:flex-row lg:gap-4">
          <button className="uppercase border-black">Subscribe</button>
          <button className="uppercase">Log In</button>
        </div>
      </div>

      {/* Laptop Date, Header, Weather  */}
      <div className="hidden mx-40 lg:flex border-b-2 py-10 justify-between items-center">
        <div className="text-sm">
          <p>{getDay()}</p>
          <p>
            {getMonth()} {now.getDate()}, {now.getFullYear()}
          </p>
        </div>
        <div className="text-6xl cursor-pointer">
          <h1 className={fell_french.className}>The Yonge Street Journal</h1>
        </div>
        <div>Weather</div>
      </div>
    </>
  );
}

import { GiHamburgerMenu } from "react-icons/gi";
import { RxMagnifyingGlass } from "react-icons/rx";
import { FaUser } from "react-icons/fa";

export default function TopBar() {
  const now = new Date();
  const getDay = () => {
    switch (now.getDay()) {
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
      case 7:
        return "Sunday";
      default:
        return "";
    }
  };

  const getMonth = () => {
    console.log(now.getMonth());
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
        <h1>The Yonge Street Journal</h1>
        <FaUser className="w-8 h-8" />
      </div>

      {/* Laptop Top Bar */}
      <div className="hidden my-5 lg:flex lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-row gap-5 justify-center">
          <GiHamburgerMenu className="w-6 h-6" />
          <RxMagnifyingGlass className="w-6 h-6" />
        </div>

        <div className="hidden lg:flex lg:flex-row lg:gap-4">
          <button className="uppercase border-black">Subscribe</button>
          <button className="uppercase">Log In</button>
        </div>
      </div>
      {/* Mobile Date and Subscribe */}
      <div className="flex border-solid border-t-2 text-sm justify-between lg:hidden">
        <div className="">
          {getDay()}, {getMonth()} {now.getDate()}, {now.getFullYear()}
        </div>
        <a className="">Subsribe</a>
      </div>
      {/* Laptop Date, Header, Weather  */}
      <div className="hidden lg:flex lg:border-b-2 lg:py-4 lg:justify-between lg:items-center">
        <div className="text-sm">
          <p>{getDay()}</p>
          <p>
            {getMonth()} {now.getDate()}, {now.getFullYear()}
          </p>
        </div>
        <div className="text-2xl">The Yonge Street Journal</div>
        <div>Weather</div>
      </div>
    </>
  );
}

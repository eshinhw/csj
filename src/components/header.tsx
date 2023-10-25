"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import { DM_Serif_Display } from "next/font/google";
import { IM_Fell_French_Canon_SC } from "next/font/google";
import { IM_Fell_Double_Pica_SC } from "next/font/google";
import { RxMagnifyingGlass } from "react-icons/rx";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import SearchBar from "./search-bar";
import { useState } from "react";
import Weather from "./weather";

const fell_french = IM_Fell_French_Canon_SC({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Header() {
  const [showSearchBar, setShowSearchBar] = useState(false);

  // const handleSearch = () => {
  //   let search: HTMLElement = document.getElementById("search__bar")!;
  //   if (search?.style.display === "none") {
  //     search.style.display = "block";
  //     setShowSearchBar(true);
  //   } else {
  //     search.style.display = "none";
  //     setShowSearchBar(false);
  //   }
  // };
  const now = new Date();
  const getDay = () => {
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
  const categories = [
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="flex flex-row items-center justify-between mx-2 my-3 lg:hidden">
        <GiHamburgerMenu className="w-4 h-4" />
        <span className="text-xl lg:text-3xl">
          <Link href="/" className={fell_french.className}>
            The Yonge Street Journal
          </Link>
        </span>
        <Link href="/signin">
          <FaUser className="w-4 h-4" />
        </Link>
      </div>
      {/* Mobile Date and Subscribe */}
      <div className="flex justify-between mx-2 text-sm border-t-2 border-solid lg:hidden">
        <div className="py-2 text-xs">
          {getDay()}, {getMonth()} {now.getDate()}, {now.getFullYear()}
        </div>
        <Link href="/subscribe" className="py-2 text-xs">
          <button>Subsribe</button>
        </Link>
      </div>

      {/* Laptop Top Bar */}
      <div className="flex-row items-center justify-between hidden my-5 lg:mx-20 xl:mx-40 lg:flex">
        <div className="flex flex-row items-center justify-center gap-4">
          <GiHamburgerMenu className="w-6 h-6 cursor-pointer" />
          <RxMagnifyingGlass
            className="w-6 h-6 cursor-pointer"
            onClick={() => setShowSearchBar(!showSearchBar)}
          />
          {showSearchBar ? <SearchBar /> : <></>}
        </div>

        <div className="hidden lg:flex lg:flex-row lg:gap-4">
          {/* <Link href="/write" className="border-black ">
            Write
          </Link> */}
          <Link href="/subscribe" className="">
            <button className="px-2 text-white rounded-sm bg-sky-600">
              Subsribe
            </button>
          </Link>
          <Link href="/signin" className="">
            <button className="px-2">Sign In</button>
          </Link>
        </div>
      </div>

      {/* Laptop Date, Header, Weather  */}
      <div className="items-center justify-between hidden py-10 border-b-2 lg:mx-20 xl:mx-40 lg:flex">
        {/* Date */}
        <div className="text-xs w-18">
          <p className="font-bold">
            {getMonth()} {now.getDate()}, {now.getFullYear()}
          </p>
          <p>{getDay()}</p>
        </div>
        {/* Title */}
        <div className="text-center cursor-pointer lg:text-3xl xl:text-6xl">
          <Link href="/" className={fell_french.className}>
            The Yonge Street Journal
          </Link>
        </div>
        {/* Weather */}
        <Weather />
      </div>
      {/* Category Section */}
      <div className="mx-2 lg:mx-20 xl:mx-40">
        <div className="flex-row justify-center hidden gap-8 my-3 text-xs lg:flex">
          {categories.map((category, idx) => (
            <Link
              key={idx}
              href={category.toLowerCase()}
              className="cursor-pointer"
            >
              {category.toUpperCase()}
            </Link>
          ))}
        </div>
        <div className="border-t-8 border-double"></div>
      </div>
    </>
  );
}

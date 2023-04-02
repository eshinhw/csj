import React from "react";

export default function TopSections() {
  return (
    <>
      <div className="lg:mx-40">
        <div className="hidden lg:flex flex-row gap-8 justify-center text-xs my-3">
          <a className="cursor-pointer">World</a>
          <a className="cursor-pointer">Canada</a>
          <a className="cursor-pointer">Toronto</a>
          <a className="cursor-pointer">Food</a>
          <a className="cursor-pointer">Beauty</a>
          <a className="cursor-pointer">Real Estate</a>
          <a className="cursor-pointer">Marketplace</a>
          <a className="cursor-pointer">Hot Deals</a>
          <a className="cursor-pointer">Opinion</a>
        </div>
        <div className="border-double border-t-8"></div>
      </div>
    </>
  );
}

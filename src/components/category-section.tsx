import Link from "next/link";
import React from "react";

const categories = [
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];

export default function CategorySection() {
  return (
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
  );
}

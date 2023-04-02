import React from "react";

export type Props = {
  params: {
    page: string;
  };
};

const handleIndividualPages = (str: string) => {
  if (str.includes("_")) {
    // replace _ to an empty space
    str = str.replace("_", " ");
    // "real estate" to "Real Estate"
    str =
      str.charAt(0).toUpperCase() +
      str.slice(1, str.indexOf(" ") + 1) +
      str.charAt(str.indexOf(" ") + 1).toUpperCase() +
      str.slice(str.indexOf(" ") + 2);
    return str;
  } else {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
};

export default function page({ params }: Props) {
  return (
    <>
      <div className="py-4 lg:mx-20 xl:mx-40">
        <div className="text-xl lg:text-4xl font-bold">{handleIndividualPages(params.page)}</div>
        <div>subsection</div>
        <div>Latest</div>
      </div>
    </>
  );
}

import React from "react";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <h1 className="mx-2 my-5 text-2xl font-bold lg:mx-20 xl:mx-40">{title}</h1>
  );
}

import React from "react";

export default function SectionTitle({ title }: { title: string }) {
  return <h1 className="text-2xl font-bold my-5">{title}</h1>;
}

"use client";
import Link from "next/link";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type Props = {
  headlines: Headline[];
};

export default function VerticalCarousel({ headlines }: Props) {
  return (
    <>
      <Carousel
        autoPlay={true}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        stopOnHover={false}
        axis="vertical"
        className="my-5"
      >
        {headlines.map((headline, idx) => (
          <span key={idx}>
            <Link href={headline.url} className="italic font-bold">
              {headline.title}
            </Link>
          </span>
        ))}
      </Carousel>
    </>
  );
}

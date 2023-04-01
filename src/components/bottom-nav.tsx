import React from "react";

export default function BottomNav() {
  return (
    <>
      <div className="text-lg">The Canada Street Journal</div>
      <div className="flex">
        {/* left section */}
        <div className="w-9/12">
          <div className="flex flex-row justify-between">
            <div>
              <div className="uppercase font-bold">NEWS</div>
              <div className="flex flex-col text-sm">
                <a>Home Page</a>
                <a>World</a>
                <a>Toronto</a>
                <a>Sports</a>
                <a>Science</a>
              </div>
            </div>
            <div>
              <div className="uppercase font-bold">OPINION</div>
              <div className="flex flex-col text-sm">
                <a>Today's Opinion</a>
                <a>Columnists</a>
                <a>Editorials</a>
                <a>Letters</a>
              </div>
            </div>
            <div>
              <div className="uppercase font-bold">ARTS</div>
              <div className="flex flex-col text-sm">
                <a>Today's Arts</a>
                <a>Arts & Design</a>
                <a>Books</a>
                <a>Music</a>
                <a>Movies</a>
              </div>
            </div>
            <div>
              <div className="uppercase font-bold">LIVING</div>
              <div className="flex flex-col text-sm">
                <a>Automative</a>
                <a>Games</a>
                <a>Education</a>
              </div>
            </div>
            <div>
              <div className="uppercase font-bold">MORE</div>
              <div className="flex flex-col text-sm">
                <a>Reader Centre</a>
                <a>Cooking</a>
                <a>Graphics</a>
                <a>Video</a>
                <a>Podcasts</a>
                <a>Live Events</a>
              </div>
            </div>
          </div>
        </div>
        {/* right section */}
        <div className="w-3/12 ml-4">
          <div className="flex flex-col">
            <div className="border-double border-b-4">
              <div className="flex flex-col">
                <div>SUBSCRIBE</div>
                <a>Home Delivery</a>
                <a>Digital Subscriptions</a>
                <a>Games</a>
                <a>Cooking</a>
              </div>
            </div>
            <div className="flex flex-col">
              <a>Mobile Applications</a>
              <a>International</a>
              <a>U.S.</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

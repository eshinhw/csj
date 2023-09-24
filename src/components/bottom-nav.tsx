import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { BiMailSend } from "react-icons/bi";
import { TbDeviceGamepad2 } from "react-icons/tb";
import { TbCooker } from "react-icons/tb";

export default function BottomNav() {
  return (
    <>
      <div className="hidden lg:mx-20 xl:mx-40 lg:my-4 lg:border-solid lg:border-t-2 lg:block lg:text-lg"></div>
      <div className="hidden lg:mx-20 xl:mx-40 lg:flex">
        {/* left section */}
        <div className="w-9/12">
          <div className="flex justify-evenly">
            <div>
              <div className="font-bold uppercase">NEWS</div>
              <div className="flex flex-col text-sm cursor-pointer">
                <a>Home Page</a>
                <a>World</a>
                <a>Canada</a>
                <a>Food</a>
                <a>Health</a>
                <a>Realty</a>
                <a>Promotion</a>
              </div>
            </div>
            <div>
              <div className="font-bold uppercase">OPINION</div>
              <div className="flex flex-col text-sm">
                <a>Columnists</a>
                <a>Editorials</a>
                <a>Letters</a>
                <a></a>
              </div>
            </div>
            <div>
              <div className="font-bold uppercase">ARTS</div>
              <div className="flex flex-col text-sm">
                <a>Books</a>
                <a>Music</a>
                <a>Movies</a>
              </div>
            </div>
            <div>
              <div className="font-bold uppercase">LIVING</div>
              <div className="flex flex-col text-sm">
                <a>Automative</a>
                <a>Games</a>
                <a>Education</a>
              </div>
            </div>
            <div>
              <div className="font-bold uppercase">MORE</div>
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
            <div className="border-b-4 border-double">
              <div className="flex flex-col">
                <div className="font-bold">SUBSCRIBE</div>
                <div className="flex items-center gap-2">
                  <TbTruckDelivery />
                  <a>Home Delivery</a>
                </div>
                <div className="flex items-center gap-2">
                  <BiMailSend />
                  <a>Digital Subscriptions</a>
                </div>
                <div className="flex items-center gap-2">
                  <TbDeviceGamepad2 />
                  <a>Games</a>
                </div>
                <div className="flex items-center gap-2">
                  <TbCooker />
                  <a>Cooking</a>
                </div>
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

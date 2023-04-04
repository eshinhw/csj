import React from "react";

export default function SubscribePage() {
  return (
    <>
      <div className="p-3 bg-white text-red-500 text-center">
        THE ALL ACCESS SALE. Now extended.
      </div>
      <div className="flex flex-col mx-[32rem]">
        <p>Sale now extended.</p>
        <p>Enjoy all of The Journal</p>
        <p>in one subscription.</p>

        <div className="border-2 border-black border-solid rounded-xl mt-5 flex flex-col items-center">
          <h1>All Inclusive Access</h1>
          <p>Investigations, culture analysis and more</p>
          <p>online and in the YSJ app.</p>

          <h2>INTRODUCTORY OFFER</h2>
          <p>$5 $0.50 Cdn/week</p>
          <p>Billed as $2 Cdn every 4 weeks for the first year.</p>
          <button>Subscribe now</button>
          <p>Cancel or pause anytime.</p>
        </div>
      </div>
      <p className="text-gray-800 text-xs my-5">
        Offer for a New York Times News or New York Times All Access Subscription; current
        subscribers not eligible. Subscriptions exclude print edition. News subscription also
        excludes New York Times Games, Cooking, Wirecutter or The Athletic, while those offerings
        are included with an All Access subscription. For a monthly subscription, your payment
        method will automatically be charged in advance the introductory offer rate every 4 weeks
        for 1 year, and after 1 year the standard rate every 4 weeks. For an annual subscription,
        your payment method will automatically be charged in advance the introductory offer rate for
        1 year, and after 1 year the standard rate once yearly. Your subscription will continue
        until you cancel. Cancellation takes effect at the end of your current billing period. Taxes
        may apply. Offer terms are subject to change.
      </p>
    </>
  );
}

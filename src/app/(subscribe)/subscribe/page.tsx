import { IM_Fell_French_Canon_SC } from "next/font/google";
import VISAIcon from "../../../../public/images/visa.png";
import MasterCardIcon from "../../../../public/images/mastercard.png";
import AmexIcon from "../../../../public/images/amex.png";
import GooglePayIcon from "../../../../public/images/googlepay.png";
import ApplePayIcon from "../../../../public/images/applepay.png";
import StripeIcon from "../../../../public/images/stripe.png";
import Image from "next/image";

const fell_french = IM_Fell_French_Canon_SC({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
// lg:mx-20 xl:mx-40

export default function SubscribePage() {
  return (
    <>
      <div className="flex flex-col">
        <header className="text-center text-2xl my-5">
          <h1 className={fell_french.className}>The Yonge Street Journal</h1>
        </header>
        <div className="mt-10 flex flex-col items-center justify-between mx-2">
          <div className="text-center">
            <h1>All Inclusive Subscription</h1>
            <p>Now Extended.</p>
            <p>Get unlimited access to News.</p>
          </div>

          <div className="flex flex-col border-t-2 my-3 min-w-[10rem] md:w-[30rem] lg:w-[35rem]">
            <fieldset>
              {/* weekly */}
              <div className="flex flex-row gap-4 border-b-2 py-2">
                <input type="radio" className="" name="subscribe" />
                <div className="text-xs">
                  <p>$0.50 Cdn/week</p>
                  <p className="text-gray-500">Billed every 4 weeks for the first year</p>
                </div>
              </div>
              {/* yearly */}
              <div className="flex flex-row gap-4 border-b-2 py-2">
                <input type="radio" className="" name="subscribe" />
                <div className="text-xs">
                  <p>$25 Cdn/year</p>
                  <p className="text-gray-500">Billed once for the first year</p>
                </div>
              </div>
            </fieldset>
            <button className="bg-black text-white p-2 w-full mt-5">Subscribe Now</button>
            <div className="flex flex-row justify-center mt-5 gap-10">
              <Image src={VISAIcon} alt="visa" className="w-7" />
              <Image src={MasterCardIcon} alt="mastercard" className="w-7" />
              <Image src={AmexIcon} alt="amex" className="w-7" />
              <Image src={StripeIcon} alt="stripe" className="w-7" />
              <Image src={GooglePayIcon} alt="googlepay" className="w-7" />
              <Image src={ApplePayIcon} alt="applepay" className="w-7" />
            </div>
            <p className="mt-5 text-sm text-center">Cancel or pause anytime.</p>
          </div>

          <p className="text-xs mt-10 text-gray-500 mx-4 my-3 ">
            Offer for a New York Times All Access subscription; current subscribers not eligible.
            Subscription excludes print edition. For a monthly subscription, your payment method
            will automatically be charged in advance the introductory offer rate every 4 weeks for 1
            year, and after 1 year the standard rate every 4 weeks. For an annual subscription, your
            payment method will automatically be charged in advance the introductory offer rate for
            1 year, and after 1 year the standard rate once yearly. Your subscription will continue
            until you cancel. Cancellation takes effect at the end of your current billing period.
            Taxes may apply. Offer terms are subject to change.
          </p>
        </div>
      </div>
    </>
  );
}

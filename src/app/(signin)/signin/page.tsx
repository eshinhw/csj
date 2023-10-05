import { IM_Fell_French_Canon_SC } from "next/font/google";
import GoogleIcon from "../../../../public/images/icons/google.png";
import FacebookIcon from "../../../../public/images/icons/facebook.png";
import Image from "next/image";

const fell_french = IM_Fell_French_Canon_SC({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
//  w-[30rem]
export default function LoginPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mx-5">
        <div className="flex flex-col">
          <h1 className="my-3 text-xl text-center">
            Log in or create an account
          </h1>
          <h3 className="text-sm">Email Address</h3>
          <input
            type="text"
            className="p-3 mt-2 mb-5 border-2 border-black border-solid"
          />
          <button className="p-3 text-white bg-black">Continue</button>
          <p className="mt-2 text-center">or</p>
          <p className="text-center">
            By continuing, you agree to the updated Terms of Sale, Terms of
            Service, and Privacy Policy.
          </p>
          <button className="my-3 border-2 border-black border-solid">
            <div className="flex flex-row items-center justify-center gap-4 my-4">
              {/* <FaGoogle /> */}
              <Image src={GoogleIcon} alt="google" className="w-5" />
              Continue with Google
            </div>
          </button>
          <button className="my-3 border-2 border-black border-solid">
            <div className="flex flex-row items-center justify-center gap-4 my-4">
              {/* <FaFacebook /> */}
              <Image src={FacebookIcon} alt="facebook" className="w-5" />
              Continue with Facebook
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

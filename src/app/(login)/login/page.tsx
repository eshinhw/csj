import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

export default function LoginPage() {
  return (
    <>
      <div className="flex flex-col md:mx-[20rem] lg:mx-[40rem]">
        <h1 className="text-3xl my-3 text-center">Log in or create an account</h1>
        <h3 className="">Email Address</h3>
        <input type="text" className="border-solid border-black border-2 p-3 my-5" />
        <button className="bg-black text-white p-3">Continue</button>
        <p className="text-center mt-2">or</p>
        <p className="text-center">
          By continuing, you agree to the updated Terms of Sale, Terms of Service, and Privacy
          Policy.
        </p>
        <button className="border-solid border-2 border-black my-3">
          <div className="flex flex-row items-center justify-center gap-4 my-4">
            <FaGoogle />
            Continue with Google
          </div>
        </button>
        <button className="border-solid border-2 border-black my-3">
          <div className="flex flex-row items-center justify-center gap-4 my-4">
            <FaFacebook />
            Continue with Facebook
          </div>
        </button>
        <button className="border-solid border-2 border-black my-3">
          <div className="flex flex-row items-center justify-center gap-4 my-4">
            <FaApple />
            Continue with Apple
          </div>
        </button>
      </div>
    </>
  );
}

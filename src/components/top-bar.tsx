import { GiHamburgerMenu } from "react-icons/gi";
import { RxMagnifyingGlass } from "react-icons/rx";

export default function TopBar() {
  return (
    <>
      <div className="flex flex-row my-5 items-center justify-between">
        <div className="flex flex-row gap-5 justify-center">
          <GiHamburgerMenu />
          <RxMagnifyingGlass />
        </div>

        {/* <div className="flex flex-row gap-4">
          <button className="uppercase border-solid">Canada</button>
          <button className="uppercase">US</button>
          <button className="uppercase">International</button>
        </div> */}

        <div className="flex flex-row gap-4">
          <button className="uppercase border-black">Subscribe</button>
          <button className="uppercase">Log In</button>
        </div>
      </div>
    </>
  );
}

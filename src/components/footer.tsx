export default function Footer() {
  return (
    <>
      <div className="flex flex-col justify-center mt-3 text-xs text-gray-500 lg:hidden">
        <h1 className="text-center">© 2023 The Yonge Street Company</h1>
        <div className="grid items-center justify-center grid-cols-3 mt-3 text-center">
          <a className="cursor-pointer">Contact Us</a>
          <a className="cursor-pointer">Accessibility</a>
          <a className="cursor-pointer">Work with us</a>
          <a className="cursor-pointer">Advertise</a>
          <a className="cursor-pointer">Privacy Policy</a>
          <a className="cursor-pointer">Terms of Sale</a>
        </div>
      </div>
      <div className="flex-row hidden py-5 mt-5 text-xs text-gray-400 border-t-2 border-current lg:mx-20 xl:mx-40 lg:flex justify-evenly">
        <span>© 2023 The Yonge Street Company</span>
        <span className="cursor-pointer">Contact Us</span>
        <span className="cursor-pointer">Accessibility</span>
        <span className="cursor-pointer">Work with Us</span>
        <span className="cursor-pointer">Advertise</span>
        <span className="cursor-pointer">Privacy Policy</span>
        <span className="cursor-pointer">Terms of Sale</span>
      </div>
    </>
  );
}

export default function Footer() {
  return (
    <>
      <div className="flex flex-col justify-center text-xs text-gray-500 mt-3 lg:hidden">
        <h1 className="text-center">© 2023 The Yonge Street Company</h1>
        <div className="grid grid-cols-3 justify-center items-center text-center mt-3">
          <a>Contact Us</a>
          <a>Accessibility</a>
          <a>Work with us</a>
          <a>Advertise</a>
          <a>Privacy Policy</a>
          <a>Terms of Sale</a>
        </div>
      </div>
      <div className="hidden lg:flex flex-row justify-evenly text-xs text-gray-400 sticky bottom-0 border-current border-t-2 mt-5">
        <span>© 2023 The Yonge Street Company</span>
        <span>Contact Us</span>
        <span>Accessibility</span>
        <span>Work with us</span>
        <span>Advertise</span>
        <span>Privacy Policy</span>
        <span>Terms of Sale</span>
      </div>
    </>
  );
}

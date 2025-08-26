function Navbar() {
  return (
    <div className="bg-[#171010] py-5 flex items-center justify-between px-6">
      <div className="flex gap-4 text-white x">
        <a className="hover:border-b border-1 font-bold" href="">
          Home
        </a>
        <a className="hover:border-b border-1" href="">
          About
        </a>
        <a className="hover:border-b" href="">
          Contact
        </a>
        <a className="hover:border-b" href="">
          Portfolio
        </a>
        <a className="hover:border-b" href="">
          Newsletter
        </a>
      </div>

      <div className="flex gap-6 text-white">
        <a className="hover:border-b" href="">
          Sign In
        </a>

        <a className="hover:border-b" href="">
          Sign Up
        </a>
      </div>
    </div>
  );
}
export default Navbar;

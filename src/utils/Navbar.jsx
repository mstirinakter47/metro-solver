import Logo from "../../public/Logo.png";
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {
  return (
    <nav className="text-white py-4 mb-10">
      <div className="mx-auto">
        <ul className="flex w-full items-center justify-center border-b border-[#2B1E36]">
          <li className="text-yellow-400 text-center cursor-pointer flex-1 text-[18px]">
            Home
          </li>
          <li className="hover:text-yellow-400 text-center cursor-pointer flex-1 text-[18px]">
            About Us
          </li>
          <li className="hover:text-yellow-400 text-center cursor-pointer flex-1">
            <div className="flex items-center gap-1 text-[18px]">
              <p>Services </p>
              <p className=" pt-1">
                <IoIosArrowDown />
              </p>
            </div>
          </li>
          <li className="text-white font-bold text-center cursor-pointer flex-1 border-l border-r border-[#2B1E36] px-4 text-[18px]">
            <img
              src={Logo}
              alt="Metro Solver"
              className="mx-auto h-10 py-1 items-center"
            />
          </li>
          <li className="hover:text-yellow-400 text-center cursor-pointer flex-1 text-[18px]">
            White Labelling
          </li>
          <li className="hover:text-yellow-400 text-center cursor-pointer flex-1 text-[18px]">
            Contact Us
          </li>
          <li className="hover:text-yellow-400 text-center cursor-pointer flex-1 text-[18px]">
            Sign up
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

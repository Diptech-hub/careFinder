import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useState } from "react";
import DropdownMenu from "./dropDown";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="px-6 sm:px-10">
      <div className="flex flex-row sm:flex-row justify-between py-6 items-center">
        <strong className="text-2xl text-teal-500 bg-inherit">
          CareFinder
        </strong>
        <button
          className="block sm:hidden text-gray-500 hover:text-teal-500 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        <div className="hidden sm:flex flex-row gap-10 items-center">
          <Link to="#" className="hover:text-teal-500">
            About
          </Link>
          <Link to="#" className="hover:text-teal-500">
            Service
          </Link>
          <Link to="#" className="hover:text-teal-500">
            Contact
          </Link>
          <Link to="#" className="hover:text-teal-500">
            Career
          </Link>
        </div>
        <div className="hidden sm:flex flex-row gap-10 items-center">
          <DropdownMenu />
        </div>
      </div>
      {isMenuOpen && (
        <div className="flex flex-col gap-4 mt-4 sm:hidden">
          <Link to="#" className="hover:text-teal-500">
            About
          </Link>
          <Link to="#" className="hover:text-teal-500">
            Service
          </Link>
          <Link to="#" className="hover:text-teal-500">
            Contact 
          </Link>
          <Link to="#" className="hover:text-teal-500">
            Career
          </Link>
          <DropdownMenu />
        </div>
      )}
      <div className="mt-6 sm:mt-20">
        <h1 className="text-center text-4xl font-bold leading-relaxed">
          Find your nearest Health Care provider <br /> in just a few{" "}
          <span className="text-teal-500">clicks!</span>
        </h1>
        <p className="text-center text-sm mt-4 font-normal">Keeping your body healthy is an expression of gratitude to the whole cosmos – the trees, the clouds, everything -Thich Nhat Hanh</p> 
        <p className="text-center text-sm mt-4 font-normal">
          We're here to help you simplify the process and connect you with the
          care you need...
        </p>
      </div>
      <div className="flex justify-center mt-10">
        <Link to="/search">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-lg font-medium text-white-900 rounded-lg group bg-gradient-to-br from-teal-500 to-teal-700 group-hover:from-teal-400 group-hover:to-teal-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none ">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-teal-500 rounded-md group-hover:bg-opacity-0 inline-flex">
              Get Started{" "}
              <FaLongArrowAltRight className="bg-inherit relative top-1.5 left-2 text-lg" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;

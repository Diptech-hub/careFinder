import DropdownMenu from "./dropDown";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

function Header() {
  return (
    <div className="">
      <div className="flex flex-row justify-between p-6 mx-10">
        <strong className="text-2xl text-teal-500 bg-inherit">
          CareFinder
        </strong>
        <div className="flex flex-row  gap-10 items-center">
          <a href="" className="hover:text-teal-500">
            Lorem
          </a>
          <a href="" className="hover:text-teal-500">
            Lorem
          </a>
          <a href="" className="hover:text-teal-500">
            Lorem
          </a>
          <a href="" className="hover:text-teal-500">
            Lorem
          </a>
        </div>
        <DropdownMenu />
      </div>
      <div className="mt-20">
        <h1 className="text-center text-4xl font-bold leading-relaxed">
          Find your nearest Health Care provider <br /> in just a few{" "}
          <span className="text-teal-500">clicks!</span>
        </h1>
        <p className="flex justify-center text-sm mt-4 font-normal">
          We're here to help you simplify the process and connect you with the
          care you need...
        </p>
      </div>
      <div className="flex flex-row justify-center mt-10">
        <Link to="/search">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-lg font-medium text-white-900 rounded-lg group bg-gradient-to-br from-teal-500 to-teal-700 group-hover:from-teal-400 group-hover:to-teal-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none "> 
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-teal-500 rounded-md group-hover:bg-opacity-0 inline-flex">
            Get Started  <FaLongArrowAltRight className="bg-inherit relative top-1.5 left-2 text-lg"/>
            </span>  
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;

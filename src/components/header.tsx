import DropdownMenu from "./dropDown"
import { Link } from  'react-router-dom'


function Header() {
  return (
    <div className="">
      <div className="flex flex-row justify-between p-6 mx-10">
        <strong className="text-2xl text-teal-500 bg-inherit">CareFinder</strong>
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
      <div className="flex justify-center mt-10">
        <input
          type="text"
          placeholder="Search by Name, Address or Specialty..."
          className="w-96 px-4 py-2 rounded-md border border-teal-300 focus:outline-none focus:ring focus:border-teal-500 "
        />
        <Link to="/search">
        <button className="py-2 px-4 rounded mx-4 bg-teal-500 text-white hover:bg-teal-700">
          Search
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;

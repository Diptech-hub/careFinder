import { useState } from "react";
import { Link } from "react-router-dom";
import LoginPage from "./loginn";
import { FaUserDoctor } from "react-icons/fa6";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown relative">
      <button
        className="dropdown-toggle bg-teal-500 hover:bg-teal-700 rounded-full mt-2 py-2 px-6 w-32 text-white inline-flex"
        onClick={toggleMenu}
        onMouseEnter={toggleMenu}
      >
       <FaUserDoctor className="bg-inherit relative right-2 top-1"/>      Admin
      </button>
      {isOpen && (
        <div className="dropdown-menu absolute z-10 mt-2 w-32">
          <Link className="link" to={`/Login`}>
            <a
              href=""
              className="flex justify-center hover:bg-teal-700"
              onClick={LoginPage}
            >
              Login
            </a>
          </Link>
          <Link className="Link" to={`/Signup`}>
          <a href="" className="flex justify-center hover:bg-teal-700">
            Sign Up
          </a>
          </Link>

          
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
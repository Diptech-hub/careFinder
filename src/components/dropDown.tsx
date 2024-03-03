import { useState } from "react";
import { Link } from "react-router-dom";
import LoginPage from "./loginn";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown relative">
      <button
        className="dropdown-toggle bg-teal-500 hover:bg-teal-700 rounded-full mt-2 py-2 w-32 text-white"
        onClick={toggleMenu}
        onMouseEnter={toggleMenu}
      >
        Admin
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

import { useState } from "react";

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
          <a href="" className="flex justify-center hover:bg-teal-700">
            Login
          </a>
          <a href="" className="flex justify-center hover:bg-teal-700">
            Sign Up
          </a>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;

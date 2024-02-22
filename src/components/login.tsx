import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { RiFacebookFill } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Logic to handle login
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-row  my-20 p-6 mx-10">
      <div className="w-1/2">
        <strong>CareFinder</strong>
      </div>
      <div className="w-1/2">
        <div className="w-full">
          <div className="flex py-4 pl-44">
            <strong className="text-2xl text-teal-500">Login</strong>
          </div>
          <div className="flex flex-col">
            <form onSubmit={handleLogin} className="">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-b border-teal-500 focus:border-teal-700 py-2 my-2 w-3/4 focus:outline-none"
                required
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-b border-teal-500 focus:border-teal-700 py-2 my-2 w-3/4 focus:outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={toggleShowPassword}
                  className="text-teal-500 absolute mt-3 hover:text-teal-700"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
              <button
                type="submit"
                className="bg-teal-500 text-white my-8 py-2 w-3/4 rounded hover:bg-teal-700"
              >
                Login
              </button>
            </form>
            <div className="flex flex-col">
              <p className="font-normal text-normal mb-4 flex pl-48">OR</p>
              <div className="">
                <div className="flex pl-44 gap-4 mb-6">
                  <button className="">
                    <BiLogoGmail className="mt-1 w-6 h-6 hover:text-red-600" />
                  </button>
                  <button className="">
                    <RiFacebookFill className="mt-1 w-6 h-6 hover:text-blue-600" />
                  </button>
                </div>
                <p className="font-medium text-sm flex pl-32">
                  Create an Account{" "}
                  <a href="" className="text-blue-800 font-medium mx-4">
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

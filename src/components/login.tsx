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
        <div className="">
          <strong className="text-2xl text-teal-500">Login</strong>
          <form onSubmit={handleLogin} className="">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-b border-teal-500 focus:border-teal-700 py-2 w-1/2 focus:outline-none"
              required
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-b border-teal-500 focus:border-teal-700 py-2 w-1/2 focus:outline-none"
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
            <button type="submit" className="bg-teal-500 text-white my-6 py-1 w-1/2 rounded hover:bg-teal-700">
              Login
            </button>
          </form>
        </div>
        <div className="flex flex-col">
          {/* Replace these with actual Google and Facebook login buttons */}
          <strong>OR</strong>
          <button className="flex flex-row justify-center py-2 px-6 w-1/2 my-4 rounded border border-teal-700 gap-2 hover:bg-red-500 hover:text-white">
           <BiLogoGmail className="bg-inherit mt-1"/>
           <span className="ml-2 bg-inherit">Google</span>
          </button>
          <button className="flex flex-row justify-center py-2 px-6 w-1/2 rounded border border-teal-700 bgap-2 hover:bg-blue-500 hover:text-white">
           <RiFacebookFill className="bg-inherit mt-1"/> 
           <span className="ml-2 bg-inherit">Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

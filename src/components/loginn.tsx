import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { RiFacebookFill } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";

interface LoginFormData {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add login logic here
    console.log("Logging in...");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-teal-500 text-2xl mb-4 font-bold">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              className="border-b border-teal-500 focus:border-teal-700 py-2 px-3 w-full my-2 text-grey-700 focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <div className="relative">
              <input
                className="border-b border-teal-500 focus:border-teal-700 pb-2 px-3 w-full my-2 text-grey-700 focus:outline-none focus:shadow-outline"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <button
                className="text-teal-500 hover:text-teal-700 absolute right-0 top-0 mt-3 mr-4"
                type="button"
                onClick={handleTogglePassword}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>
          <button
            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Login
          </button>
        </form>
        <div className="">
          <p className="text-center my-4">OR</p>
          <div className="">
            <div className="ext-center">
              <button className="bg-teal-500 hover:bg-teal-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/4">
                <BiLogoGmail className="" />
              </button>
              <button className="bg-teal-500 hover:bg-teal-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/4">
                <RiFacebookFill className="" />
              </button>
            </div>
            <p className="">
              Create an Account{" "}
              <a href="" className="">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

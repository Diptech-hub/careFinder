import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  const [error, setError] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Check if password is correct
    if (formData.password !== "correctpassword") {
      setError("Incorrect Password or Email");
      return;
    }
    // Clear error if password is correct
    setError("");
    // Add login logic here
    console.log("Logging in...");
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="shadow-md rounded px-24 pt-6 pb-8 mb-4 w-1/2">
        <h2 className="text-teal-500 text-2xl mb-4 font-bold text-center">
          Login
        </h2>
        {error && <p className="text-center text-red-500 mb-4">{error}</p>}
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
                className="bg-inherit text-teal-500 hover:text-teal-700 absolute right-0 top-0 mt-3 mr-4"
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
            <div className="flex flex-row justify-center gap-4">
              <button className="bg-red-500 hover:bg-red-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/4">
                <BiLogoGmail className="bg-inherit text-white" />
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/4">
                <RiFacebookFill className="bg-inherit text-white" />
              </button>
            </div>
            <p className="flex flex-row justify-center my-6 gap-4">
              Create an Account{" "}
              <Link to={`/Signup`}>
                <a href="" className="text-blue-500 hover:text-blue-700">
                  Sign Up
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

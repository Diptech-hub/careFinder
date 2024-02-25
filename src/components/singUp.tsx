import React, { useState } from "react";
import { RiFacebookFill } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";

interface SignUpFormData {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState<SignUpFormData>({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    // Clear error if passwords match
    setError("");
    // Add signup logic here
    console.log("Signing up...");
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="shadow-md rounded px-24 pt-6 pb-8 mb-16 w-1/2">
        <h2 className="text-teal-500 text-2xl mb-4 font-bold text-center">
          Sign Up
        </h2>
        {error && <p className="text-center text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <input
              type="text"
              name="userName"
              placeholder="Admin Name"
              value={formData.userName}
              onChange={handleInputChange}
              className="border-b border-teal-500 focus:border-teal-700 py-2 px-3 w-full my-2 text-grey-700 focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="border-b border-teal-500 focus:border-teal-700 py-2 px-3 w-full my-2 text-grey-700 focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4 relative">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="border-b border-teal-500 focus:border-teal-700 py-2 px-3 w-full my-2 text-grey-700 focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4 relative">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="border-b border-teal-500 focus:border-teal-700 py-2 px-3 w-full my-2 text-grey-700 focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Sign Up
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
              Already have an Account{" "}
              <a href="" className="text-blue-500 hover:text-blue-700">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

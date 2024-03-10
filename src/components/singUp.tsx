import React, { useState } from "react";
import { RiFacebookFill } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

// interface SignUpFormData {
//   userName: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// }

const SignupPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    await createUserWithEmailAndPassword(auth, user.email, user.password)
      .then(() => {
        navigate("/data/:id");
      })
      .catch((error) => alert(error.message))
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="flex justify-center items-center h-screen my-16 ">
      <div className="shadow-md rounded px-24 pt-6 pb-8 my-16 w-1/2">
        <h2 className="text-teal-500 text-2xl mb-4 font-bold text-center">
          Sign Up
        </h2>
        <div className="mb-4">
          <input
            type="text"
            value={user.userName}
            placeholder="Admin Name"
            onChange={(e) =>
              setUser((state) => ({ ...state, userName: e.target.value }))
            }
            className="border-b border-teal-500 focus:border-teal-700 py-2 px-3 w-full my-2 text-grey-700 focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            value={user.email}
            onChange={(e) =>
              setUser((state) => ({ ...state, email: e.target.value }))
            }
            placeholder="Email"
            className="border-b border-teal-500 focus:border-teal-700 py-2 px-3 w-full my-2 text-grey-700 focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <div className="relative">
            <input
              value={user.password}
              onChange={(e) =>
                setUser((state) => ({ ...state, password: e.target.value }))
              }
              className="border-b border-teal-500 focus:border-teal-700 pb-2 px-3 w-full my-2 text-grey-700 focus:outline-none focus:shadow-outline"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
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
          onClick={handleSubmit}
          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          {isSubmitting ? "Signing up..." : "Sign up"}
        </button>
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
              <Link to={`/Login`}>
                <a href="" className="text-blue-500 hover:text-blue-700">
                  Login
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

import React, { useState } from "react";
import axios from "axios";
import { TiArrowSortedDown } from "react-icons/ti";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Import eye icons from React Icons
import { Link, Navigate, useNavigate } from "react-router-dom";
const SignUpForm = () => {
    const navigate =useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    //   const response = await axios.post("/api/signup", formData);
    //   console.log("User signed up successfully:", response.data);
    navigate('/')
      // Redirect or show success message
    } catch (error) {
      console.error("Sign-up failed:", error.response.data);
    }
  };

  return (
    <div className="container mx-auto ">
      <div className="flex justify-center items-center bg-gradient-to-r from-[#CBE0EA] via-[#C2D7E0] to-[#DAE0E2]">
        <div className="">
          <div className=" ">
              <h1 className="text-[48px] font-int font-bold">
                Join to our community
              </h1>
              <p className="text-[40px] font-int">
                “Sunshine is delicious, rain is refreshing, wind braces up, snow is
                exhilarating; there is no such thing as bad weather, only different
                kinds of good weather.”
              </p>
          </div>
          <div>
            <img src="src/assets/icons/clouds.svg"/>
          </div>
        </div>
        <div className="min-w-[600px] bg-white rounded-s-3xl px-10 py-5">
          <span className="flex gap-2 text-2xl font-int text-[#00000080] justify-end mb-24 mt-10">
            {" "}
            English (U.K) <TiArrowSortedDown />
          </span>
          <h1 className="text-5xl font-int">Create Account</h1>
          <form onSubmit={handleSubmit}>
            <div className="mt-20 flex flex-col justify-between items-center gap-4 max-w-[720px]">
              <input
                className="bg-[#FCF7E8] p-4 rounded-lg text-2xl w-full"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
              />
              <input
                className="bg-[#FCF7E8] p-4 rounded-lg text-2xl w-full"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
              <div className="relative flex items-center w-full bg-[#FCF7E8] rounded-lg">
                <input
                  className="bg-[#FCF7E8] p-4 rounded-lg text-2xl grow"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600"
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible className="h-5 w-5" />
                  ) : (
                    <AiOutlineEye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center">
            <button type="submit" className="text-[14px] mt-10  whitespace-nowrap rounded-full px-6 py-2 lg:px-32 lg:py-6 bg-[#0FB3BB] lg:text-4xl text-white font-int">
              Sign Up
            </button>
            </div>
            <div className="divider divider-vertical my-20 font-int text-[#00000080] text-[24px]">
              Or Sign Up with
            </div>
            <div className="flex justify-center items-center gap-24">
              <img src="src/assets/icons/google.svg" />
              <img src="src/assets/icons/facebook.svg" />
              <img src="src/assets/icons/nstagram.svg" />
            </div>
            <div className="flex justify-center items-center">
                <p className="text-2xl text-[#00000080] mt-10 justify-self-center">
                  Already have an account ?{" "}
                  <Link to={'/'} className="text-black">Log In</Link>
                </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;

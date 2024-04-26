/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  const [htmlFormData, sethtmlFormData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (event: any) => {
    const { value, name } = event.target;
    sethtmlFormData((prevhtmlFormData) => ({
      ...prevhtmlFormData,
      [name]: value,
    }));
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    console.log(htmlFormData);
    alert("Logined Successfully");
  };

  return (
    <div className="font-[sans-serif] text-[#333] mt-24 md:mt-14">
      <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
        <div className="grid md:grid-cols-2 items-center gap-4 max-w-7xl w-full">
          <div className="border border-gray-300 rounded-md p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <form className="space-y-6" onSubmit={submitHandler}>
              <div className="mb-10">
                <h3 className="text-3xl font-extrabold">Sign in</h3>
                <p className="text-sm mt-4">
                  Sign in to your account and explore a world of possibilities.
                  Your journey begins here.
                </p>
              </div>
              <div>
                <label className="text-sm mb-2 block">Email</label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="text"
                    required
                    className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
                    placeholder="Enter Email"
                    onChange={changeHandler}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-4"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="10"
                      cy="7"
                      r="6"
                      data-original="#000000"
                    ></circle>
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
              </div>
              <div>
                <label className="text-sm mb-2 block">Password</label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type={isPasswordVisible ? "text" : "password"}
                    required
                    className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
                    placeholder="Enter password"
                    onChange={changeHandler}
                  />
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={togglePasswordVisibility}
                  >
                    {isPasswordVisible ? (
                      <IoEyeOff className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <IoEye className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2">
                <div className="text-sm">
                  <a
                    href="jajvascript:void(0);"
                    className="text-blue-600 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div className="!mt-10">
                <button
                  type="submit"
                  className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-[#333] hover:bg-black focus:outline-none"
                >
                  Log in
                </button>
              </div>
              <p className="text-sm !mt-10 text-center">
                Don't have an account{" "}
                <a
                  href="/admin/signup"
                  className="text-blue-600 hover:underline ml-1 whitespace-nowrap"
                >
                  Register here
                </a>
              </p>
            </form>
          </div>
          <div className="lg:h-[400px] md:h-[300px] max-md:mt-10">
            <img
              src="https://readymadeui.com/login-image.webp"
              className="w-full h-full object-cover"
              alt="long legged woman swiping her passkey lol"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

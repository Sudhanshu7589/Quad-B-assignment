import React, { useState } from "react";
import ImageLogo from "../assets/login.jpg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { apiConnector } from "../services/apiConnector";
import { signupUrl } from "../services/apis";
import { toast } from "react-hot-toast";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [data, setData] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const submitHandler = async (event) => {

    event.preventDefault();

    if (!agreeTerms) {
      toast.error("You must agree with the Privacy Policy and Terms of Use.");
      return;
    }
    const loading = toast.loading("Loading...");

    try {
      const res = await apiConnector("POST", signupUrl, data);
      toast.success(res.data.message);
      navigate('/login')
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
    toast.dismiss(loading);
  };

  const { fullName, userName, email, password } = data;

  return (
    <div className="flex items-center gap-32 w-screen h-screen overflow-hidden">
      <div className="">
        <img src={ImageLogo} alt="Login" className="w-[736px] h-[1080px]" />
      </div>

      <div className="form-container">
        <h1 className="text-5xl font-medium mb-5 leading-10 text-slate-950">
          Sign Up
        </h1>

        <div className="text-base w-[456px] h-[26px] mb-5">
          <p className="text-gray-500">
            Already have an account?{" "}
            <Link to="/login">
              <span className="text-emerald-400 hover:text-emerald-600 text-lg font-semibold">
                Sign in
              </span>
            </Link>
          </p>
        </div>

        <form className="flex flex-col gap-5" onSubmit={submitHandler}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={onChangeHandler}
              className="border-b-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="userName" className="block text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={userName}
              onChange={onChangeHandler}
              className="border-b-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Username"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onChangeHandler}
              className="border-b-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Email address"
              required
            />
          </div>

          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={onChangeHandler}
              className="border-b-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Password"
              required
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-1 top-8 cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-gray-600 flex items-center">
              <input
                type="checkbox"
                id="agreeTerms"
                checked={agreeTerms}
                onChange={() => setAgreeTerms(!agreeTerms)}
                className="mr-2 w-[24px] h-[24px]"
              />
              <p>
                I agree with the{" "}
                <span className="font-bold">Privacy Policy</span> and{" "}
                <span className="font-bold">Terms of Use</span>
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="bg-slate-950 hover:bg-slate-800 text-white font-bold py-2 mt-5 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

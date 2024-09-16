import React, { useState } from "react";
import ImageLogo from "../assets/login.jpg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { apiConnector } from "../services/apiConnector";
import { loginUrl } from "../services/apis";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const [showPassword, setShowPassword] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const submitHandler = async (event) => {
    event.preventDefault();
    const loading = toast.loading("Loading");

    try {
      const res = await apiConnector("POST", loginUrl, data);
      localStorage.setItem("person", JSON.stringify(res?.data?.user));
      setUser(res.data.user);
      toast.success(res.data.message);
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
    toast.dismiss(loading);
  };

  const onChangeHandler = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="flex items-center gap-32  w-screen h-screen overflow-hidden">
      <div className="">
        <img src={ImageLogo} alt="Login" className="w-[736px] h-[1080px] " />
      </div>

      <div className="form-container">
        <h1 className="text-5xl font-medium	 mb-5 leading-10 text-slate-950	">
          Sign In
        </h1>

        <div className="text-base w-[456px] h-[26px] mb-5">
          <p className="text-gray-500  ">
            Don't have an account?{" "}
            <Link to="/signup">
              <span className="text-emerald-400	 hover:text-emerald-600	text-lg	font-semibold">
                Sign Up
              </span>
            </Link>
          </p>
        </div>

        <form className="flex flex-col gap-5" onSubmit={submitHandler}>
          <div className="mb-4 ">
            <input
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={onChangeHandler}
              className="border-b-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Email address "
              required
            />
          </div>
          <div className="mb-4">
            <input
              name="password"
              value={data.password}
              onChange={onChangeHandler}
              type={showPassword ? "text" : "password"}
              id="password"
              className="border-b-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Password"
              required
            />
          </div>
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-[110px] top-[425px] z-[10] cursor-pointer"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
          <div className="flex items-center justify-between">
            <div className=" text-gray-600 flex items-center justify-center">
              <input
                type="checkbox"
                id="remember_me"
                className="mr-2 w-[24px] h-[24px]"
              />
              <span className="text-xl">Remember me</span>
            </div>
            <Link
              to="/forgot-password"
              className=" text-slate-950 font-semibold hover:text-slate-700	"
            >
              <span>Forgot password?</span>
            </Link>
          </div>
          <button
            type="submit"
            className="bg-slate-950 hover:bg-slate-800 text-white font-bold py-2 mt-5 px-4 rounded focus:outline-none focus:shadow-outline "
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

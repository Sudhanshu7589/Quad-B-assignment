import React from "react";
import sideImage1 from "../assets/category/Badroom.svg";
import sideImage2 from "../assets/category/sideNewsletter2.svg";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
function NewsLetter() {
  return (
    <div className="flex justify-between w-full h-[360px] overflow-hidden">
      <div className="max-w-[300px]">
        <img
          className="  scale-125 ml-[-490px] min-w-[760px]"
          src={sideImage1}
          alt=""
        />
      </div>
      <div className="bg-gray-100 w-full flex flex-col justify-center items-center gap-3">
        <h2 className="w-[456px] h-[44px] font-semibold leading-10 text-5xl text-black">
          Join Our Newsletter
        </h2>
        <p className="w-[540px] h-[30px] font-normal leading-7 text-xl text-center tracking-wider ">
          Sign up for deals, new products and promotions
        </p>
        <div className="flex items-center  justify-between">
          <div className="flex w-[400px] items-center gap-2 mt-5">
            <MdOutlineMailOutline />
            <input
              className=" outline-none bg-gray-100"
              type="email"
              placeholder="Email address"
            />
          </div>
          <Link  to={"/signup"}>Signup</Link>
        </div>
        <div className="w-[470px] h-[1px] bg-gray-500"></div>
      </div>

      <div className="max-w-[300px]">
        <img
          className="scale-150 mt-[-100px] min-w-[450px]"
          src={sideImage2}
          alt=""
        />
      </div>
    </div>
  );
}

export default NewsLetter;

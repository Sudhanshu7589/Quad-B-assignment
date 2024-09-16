import React from "react";
import IMG from "../assets/category/BannerPageImg.svg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function BannerPage() {
  return (
    <div className="flex w-full mt-12 bg-gray-100">
      <div className="  ">
        <img src={IMG} alt="" />
      </div>
      <div className="bg-gray-100 ml-[60px] min-w-[50%] flex flex-col justify-center gap-6 ">
        <div className="text-blue-500 font-semibold w-[452px] h-[16px] leading-3 text-xl">SALE UP TO 35% OFF</div>
        <div className="w-[452px] h-[88px] font-medium text-5xl text-black leading-10">
          HUNDEREDS of <br /> New lower prices!{" "}
        </div>
        <div  className="w-[452px] h-[64px] font-normal text-xl leading-8 text-black ">
          It's more affordable the ever to give every <br /> room in your home a
          stylish makeover
        </div>
        <Link className="">
        <div className="flex items-center gap-2 text-black font-medium text-sm leading-7">
              <Link>Shop Now </Link>
              <span className=" mr-auto">
                <FaArrowRight />
              </span>
            </div>
            <div className="h-[2px] w-24 bg-gray-800"></div>
        </Link>
      </div>
    </div>
  );
}

export default BannerPage;

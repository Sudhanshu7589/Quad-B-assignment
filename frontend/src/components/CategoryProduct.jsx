import React from "react";
import bedroom from "../assets/category/Badroom.svg";
import livingRoom from "../assets/category/LivingRoom.svg";
import kitchen from "../assets/category/Kitchen.svg";

import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CategoryProduct = () => {
  return (
    <div className="flex gap-5 mx-auto ml-36 mt-7">
      <div className="relative">
        <img src={livingRoom} alt="" />
        <div className=" absolute z-10 top-10 left-10">
          <h2 className="w-[360px] h-[38px] text-2xl leading-6 font-bold">
            Living Room
          </h2>
          <div className="flex items-center gap-2 ">
            <Link to="/shop/product/living-room">Shop Now </Link>
            <span className=" mr-auto">
              <FaArrowRight />
            </span>
          </div>
          <div className="h-[2px] w-24 bg-gray-800"></div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className=" relative">
          <img src={bedroom} alt="" />
          <div className=" absolute z-10 top-56 left-10">
            <h2 className="w-[360px] h-[38px] text-2xl leading-6 font-bold">
              Bedroom
            </h2>
            <div className="flex items-center gap-2 ">
              <Link to="/shop/product/bedroom">Shop Now </Link>
              <span className=" mr-auto">
                <FaArrowRight />
              </span>
            </div>
            <div className="h-[2px] w-24 bg-gray-800"></div>
          </div>
        </div>
        <div className=" relative">
          <img src={kitchen} alt="" />
          <div className=" absolute z-10 top-56 left-10">
            <h2 className="w-[360px] h-[38px] text-2xl leading-6 font-bold">
              Kitchen
            </h2>
            <div className="flex items-center gap-2 ">
              <Link to="/shop/product/kitchen">Shop Now </Link>
              <span className=" mr-auto">
                <FaArrowRight />
              </span>
            </div>
            <div className="h-[2px] w-24 bg-gray-800"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;

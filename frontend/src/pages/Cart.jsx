import React from "react";
import { RiCouponLine } from "react-icons/ri";

import AllCart from "../components/AllCart";
const Cart = () => {
  
  

  return (
    <div>
      <div className=" flex flex-col justify-center items-center  ">
        <h2 className="w-[117px] h-[58px] font-medium leading-10 text-5xl">
          Cart
        </h2>
        <div className="flex ">
          <span className="bg-black text-white border border-1 rounded-full  w-[42px] h-[42px]  items-center content-center flex justify-center">
            1
          </span>
          <p className="w-[256px] h-[42px] items-center mt-[8px] ml-5 font-semibold leading-6 text-lg">
            Shopping cart
          </p>
          <span className="bg-gray-400 text-white border border-1 rounded-full  w-[42px] h-[42px]  items-center content-center flex justify-center">
            2
          </span>
          <p className=" text-gray-400 w-[256px] h-[42px] items-center mt-[8px] ml-5 font-semibold leading-6 text-lg">
            Checkout details
          </p>
          <span className="bg-gray-400 text-white border border-1 rounded-full  w-[42px] h-[42px]  items-center content-center flex justify-center">
            3
          </span>
          <p className="text-gray-400 w-[256px] h-[42px] items-center mt-[8px] ml-5 font-semibold leading-6 text-lg">
            Order complete
          </p>
        </div>
      </div>
      <AllCart />
      <div className=" w-[424px] h-[129px] ml-48 mb-10">
        <h2 className="font-medium text-xl leading-7 mb-2">Have a coupon?</h2>
        <p className="font-normal leading-7 text-gray-400 w-[424px] h-[26px] mb-3">
          Add your code for for an instant card discount
        </p>

        <div className="">
          <div className="flex border border-gray-400 items-center  w-[424px] h-[52px]">
            <div className="flex items-center ml-2">
              <RiCouponLine className="w-[20px] h-[18px]" />

              <p className="w-[309px] h-[28px] text-gray-400 font-medium leading-7 ml-3">
                Coupan code
              </p>
            </div>
            <p className="w-[43px] h-[28px] font-medium leading-7 ml-3">
              Apply
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

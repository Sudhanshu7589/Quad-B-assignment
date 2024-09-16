import React, { useState } from "react";
import black from "../assets/Cart/black.svg";
import red from "../assets/Cart/red.svg";
import lamp from "../assets/Cart/lamp.svg";
import { Link, useNavigate } from "react-router-dom";

const AllCart = () => {
    const [count, setCount] = useState(1);
    const navigate = useNavigate();
  return (
    <div>
      <div className="ml-72 flex  mb-64">
        <div className="w-[643px] h-[482px] ml-[-100px]">
          <div className="flex gap-64 text-black font-semibold text-normal leading-6">
            <div className="">
              <p className="">Product</p>
            </div>
            <div className="flex gap-24">
              <p>Quantity</p>
              <p>Price</p>
              <p>Subtotal</p>
            </div>
          </div>
          <div className="w-[665px] h-[2px] bg-gray-400 mt-5"></div>

          <div className="flex gap-64 mt-10 ">
            <div className="flex">
              <img src={black} alt="" />
              <div className=" ml-3 mb-4">
                <p className=" font-semibold text-sm leading-5 text-black mb-3">
                  Try Tabel
                </p>
                <p className="w-[68px] h-[20px] text-gray-400 font-normal text-xs mb-2">
                  Color: Black
                </p>
                <Link className="text-gray-400"> ❌Remove</Link>
              </div>
            </div>

            <div className="flex gap-24">
              <div className="flex w-[80px] h-[32px] border ml-[-25px] border-black justify-center items-center  gap-3 ">
                <button
                  disabled={count === 1}
                  onClick={() => setCount(count - 1)}
                  className=""
                >
                  -
                </button>
                <p className=" ">{count}</p>
                <button
                  className=""
                  disabled={count === 9}
                  onClick={() => setCount(count + 1)}
                >
                  +
                </button>
              </div>

              <div className="  text-lg  leading-6 text-black ">$19</div>
              <div className=" font-semibold text-lg leading-8 ">$38</div>
            </div>
          </div>
          <div className="w-[648px] h-[1px] bg-gray-400 mt-16"></div>

          <div className="flex gap-64 mt-10">
            <div className="flex">
              <img src={red} alt="" />
              <div className=" ml-3 mb-4">
                <p className=" font-semibold text-sm leading-5 text-black mb-3">
                  Try Tabel
                </p>
                <p className="w-[68px] h-[20px] text-gray-400 font-normal text-xs mb-2">
                  Color: Red
                </p>
                <Link className="text-gray-400"> ❌Remove</Link>
              </div>
            </div>

            <div className="flex gap-24">
              <div className="flex w-[80px] h-[32px] border ml-[-25px] border-black justify-center items-center  gap-3 ">
                <button
                  disabled={count === 1}
                  onClick={() => setCount(count - 1)}
                  className=""
                >
                  -
                </button>
                <p className=" ">{count}</p>
                <button
                  className=""
                  disabled={count === 9}
                  onClick={() => setCount(count + 1)}
                >
                  +
                </button>
              </div>

              <div className="  text-lg  leading-6 text-black ">$19</div>
              <div className=" font-semibold text-lg leading-8 ">$38</div>
            </div>
          </div>
          <div className="w-[648px] h-[1px] bg-gray-400 mt-16"></div>

          <div className="flex gap-64 mt-10">
            <div className="flex">
              <img src={lamp} alt="" />
              <div className=" ml-3 mb-4">
                <p className=" font-semibold text-sm leading-5 text-black mb-3">
                  Try Tabel
                </p>
                <p className="w-[68px] h-[20px] text-gray-400 font-normal text-xs mb-2">
                  Color: Gold
                </p>
                <Link className="text-gray-400"> ❌Remove</Link>
              </div>
            </div>

            <div className="flex gap-24">
              <div className="flex w-[80px] h-[32px] border ml-[-25px] border-black justify-center items-center  gap-3 ">
                <button
                  disabled={count === 1}
                  onClick={() => setCount(count - 1)}
                  className=""
                >
                  -
                </button>
                <p className=" ">{count}</p>
                <button
                  className=""
                  disabled={count === 9}
                  onClick={() => setCount(count + 1)}
                >
                  +
                </button>
              </div>

              <div className="  text-lg  leading-6 text-black ">$19</div>
              <div className=" font-semibold text-lg leading-8 ">$38</div>
            </div>
          </div>
          <div className="w-[648px] h-[1px] bg-gray-400 mt-16"></div>
        </div>

        <div className="w-[413px] h-[455px] border ml-20 border-black">
          <div className="mt-4">
            <h2 className="ml-5 w-[365px] h-[28px] font-medium text-xl leading-7 mb-3">
              Cart Summery
            </h2>

            <div className=" ml-5">
              <div className="flex items-center border rounded bg-gray-300  border-gray-400 w-[365px] h-[52px] mb-5 ">
                <input
                  type="radio"
                  name="cart"
                  checked
                  className="ml-2  bg-black"
                />{" "}
                <span className="ml-3">Free shipping</span>
                <span className="ml-52">$0</span>
              </div>
              <div className="flex items-center border rounded   border-gray-400 w-[365px] h-[52px] mb-5">
                <input type="radio" name="cart" className="ml-2  bg-black" />{" "}
                <span className="w-[103] h-[26px] text-normal leading-6 ml-2">
                  Express shipping
                </span>
                <span className="ml-36">+$15.00</span>
              </div>
              <div className="flex items-center border rounded  border-gray-400 w-[365px] h-[52px] mb-5">
                <input type="radio" name="cart" className="ml-2  bg-black" />
                <span className="w-[103] h-[26px] text-normal leading-6 ml-2">
                  Pick up
                </span>
                <span className="ml-56">%21.00</span>
              </div>
            </div>
            <div className="ml-5">
              <div className=" mb-4">
                <span className="h-[26px] w-[64px] font-normal text-medium">
                  Subtotal
                </span>
                <span className="ml-60 w-[75px] h-[26] font-semibold leading-7 text-medium">
                  $1234.00
                </span>
                <hr className="w-[365px] mt-5" />
              </div>
              <div className="">
                <span className="w-[49px] h-[32px] font-semibold leading-8 text-xl">
                  Total
                </span>{" "}
                <span className="ml-60  w-[94px] h-[32px] font-semibold leading-8 text-xl">
                  $1345.00
                </span>
              </div>
            </div>
            <div className="">
              <button
                type="submit"
                className="bg-slate-950 hover:bg-slate-800 text-white font-bold py-2 mt-5 px-4 rounded-lg focus:outline-none focus:shadow-outline w-[365px] ml-4 h-[52px]"
                onClick={()=>navigate("/checkout-details")}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCart;

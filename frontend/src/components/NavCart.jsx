import React from "react";
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux";
import CartProduct from "./CartProduct";


const NavCart = ({ setCartModal }) => {

  let subTotal = 0;

  const { cart, total } = useSelector((state) => state.cart);

  const items = cart.slice(0, 3); // Get first 3 items

  console.log("Cart->", cart);

  return (
    <div>
      <div className="w-[413px] min-h-auto ml-5 mb-5">
        <div className="flex w-[365px] min-h-[34px] mt-7 justify-between">
          <h2 className="w-[325px] h-[34px] text-3xl leading-8 font-medium">
            Cart
          </h2>
          <span
            className="bg-black text-white -mr-5 border border-1 rounded-full w-[33.78px] h-[33.78px] items-center content-center flex justify-center cursor-pointer"
            onClick={() => setCartModal(false)}
           >
            X
          </span>
        </div>

        {/* Cart Items */}
        {items.map((item, i) => {
          subTotal += item.discountPrice;
          return <CartProduct item={item} />;
        })}

        {/* Subtotal */}
        <div className="w-[365px] h-[52px] flex gap-[280px]">
          <p className="w-[64px] h-[26px] font-normal text-sm leading-7">
            Subtotal
          </p>
          <span className="w-[57px] h-[26px] font-semibold text-sm leading-7">
            ${subTotal}.00
          </span>
        </div>
        <div className="bg-[#E8ECEF] h-[1px] w-[365px]"></div>

        {/* Total */}
        <div className="w-[365px] h-[52px] flex gap-[265px] mt-3">
          <p className="w-[51px] h-[28px] font-medium text-[20px] leading-7">
            Total
          </p>
          <span className="w-[80px] h-[28px] font-semibold text-[20px] leading-7">
            ${total}.00
          </span>
        </div>

        {/* Checkout Button */}
        <div>
          <button
            type="submit"
            className="bg-slate-950 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-[380px] h-[52px] mb-7"
          >
            Checkout
          </button>
        </div>

        {/* View Cart */}
        <div
          className="flex justify-center items-center"
          onClick={() => setCartModal(false)}
        >
          <Link
            to="/cart"
            className="font-semibold text-[14px] leading-6 ml-[-25px] underline"
          >
            View All Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavCart;

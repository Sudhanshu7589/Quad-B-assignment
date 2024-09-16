import React, { useState } from "react";
import { removeFromCart } from "../slices/cartSlice";
import { useDispatch } from "react-redux";

const CartProduct = ({ item }) => {
  const [counts, setCounts] = useState({});
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: Math.min((prevCounts[id] || 1) + 1, 9), // Increment but cap at 9
    }));
  };

  const handleDecrement = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: Math.max((prevCounts[id] || 1) - 1, 1), // Decrement but minimum is 1
    }));
  };

  return (
    <div key={item._id} className="max-w-[365px] max-h-[500px] mt-7">
      <div className="flex items-center">
        <img
          src={item?.productImages?.[0]} // Image from the item object
          alt={item?.productTitle || "Product Image"}
          className="max-w-16 max-h-32"
        />
        <div>
          <div className="flex ml-2">
            <h2 className="w-[180px] h-[22px] font-semibold text-[14px] leading-6">
              {item.productTitle} {/* Product name */}
            </h2>
            <span className="ml-20 w-[44px] h-[22px] text-[14px] font-semibold leading-6">
              ${item.discountPrice} {/* Product price */}
            </span>
          </div>
          <p className="h-[20px] text-[#6C7275] font-normal text-[12px] leading-5 ml-11 mt-1 ">
            <span
              className="ml-56 w-[30px] h-[20px] flex justify-center items-center text-white bg-red-600 rounded-full cursor-pointer transition-transform transform hover:scale-110 active:scale-95"
              onClick={() => dispatch(removeFromCart(item._id))}
            >
              X
            </span>
          </p>

          {/* Quantity Control */}
          <div className="ml-9">
            <div className="flex w-[80px] h-[32px] border ml-[-25px] border-black justify-center items-center gap-3">
              <button
                disabled={counts[item._id] === 1} // Ensure you're using _id consistently
                onClick={() => handleDecrement(item._id)}
              >
                -
              </button>
              <p>{counts[item._id] || 1}</p> {/* Show count */}
              <button
                disabled={counts[item._id] === 9} // Disable increment button at count 9
                onClick={() => handleIncrement(item._id)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[376px] h-[2px] bg-[#E8ECEF]"></div>
    </div>
  );
};

export default CartProduct;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { BsMinecart } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { IoLogOutOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { resetCart } from "../slices/cartSlice";
import NavCart from "../components/NavCart";

function Navbar({ user, setUser }) {
  const [search, setSearch] = useState(true);
  const [modal, setModal] = useState(false);
  const [cartModal, setCartModal] = useState(false);
  const { totalItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const logOutHandaler = () => {
    localStorage.clear("person");
    setUser(null);
    dispatch(resetCart());
    setModal(false);
  };
  return (
    <div className="  relative w-full mx-auto flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700">
      <div className="flex w-[100px] md:w-11/12 max-w-maxContent items-center justify-between gap-24">
        {/* Logo */}
        <Link
          to="/"
          className="w-[105px] h-[24px] font-medium leading-6 text-base"
        >
          3legant
        </Link>

        <nav className="">
          <ul className=" w-full flex md:gap-x-6 text-richblack-25">
            <Link
              to={"/"}
              className=" h-[24px] text-sm	leading-6 font-medium text-gray-900	"
            >
              Home
            </Link>
            <Link
              to={"/shop/product/allproduct"}
              className=" h-[24px] text-sm	leading-6 font-medium text-gray-900	"
            >
              Shop
            </Link>
            {user?.role === "admin" ? (
              <Link
                to={"/admin/addproduct"}
                className=" h-[24px] text-sm leading-6 font-medium text-gray-900	"
              >
                Add Product
              </Link>
            ) : (
              <Link
                to={"/contact-us"}
                className=" h-[24px] text-sm leading-6 font-medium text-gray-900	"
              >
                Contact Us
              </Link>
            )}
          </ul>
        </nav>

        {!user ? (
          <div className="items-center gap-x-2 flex">
            <Link to="/login">
              <button className="hidden md:block rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                Log in
              </button>
            </Link>
            <Link to="/signup">
              <button className="hidden md:block rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                Sign up
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex gap-7 justify-center">
            {search ? (
              <div className="flex items-center justify-center">
                <input
                  type="text"
                  className=" outline-none"
                  placeholder="Search...."
                />{" "}
                <RxCross2 size={20} onClick={() => setSearch(!search)} />
              </div>
            ) : (
              <CiSearch size={20} onClick={() => setSearch(!search)} />
            )}
            <div
              className=" relative cursor-pointer "
              onClick={() => setCartModal(true)}
            >
              <BsMinecart size={20} />
              <p className=" absolute bottom-5 -right-1 bg-orange-400  rounded-full h-4 w-4 p-2 flex items-center justify-center">
                {totalItems}
              </p>
            </div>
            <div
              className="flex gap-2 items-center justify-center cursor-pointer"
              onClick={() => setModal(!modal)}
            >
              <img
                src={user.profilePhoto}
                alt=""
                className="w-[25px] h-[25px]  rounded-full"
              />

              {modal ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
          </div>
        )}
      </div>
      {modal && (
        <div
          className="absolute cursor-pointer top-14 right-6 flex items-center justify-between gap-3"
          onClick={logOutHandaler}
        >
          <p className="text-xl font-semibold leading-7">Log Out</p>
          <IoLogOutOutline size={25} />
        </div>
      )}

      {cartModal && (
        <div className=" absolute top-16 right-6 z-50 bg-slate-100 rounded-md">
          {" "}
          <NavCart setCartModal={setCartModal} />
        </div>
      )}
    </div>
  );
}

export default Navbar;

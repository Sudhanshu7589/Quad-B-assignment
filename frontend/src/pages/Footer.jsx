import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook, SlSocialYoutube } from "react-icons/sl";

function Footer() {
  
  return (
    <div className="w-full h-[249px] bg-zinc-900 flex items-center justify-center" >
      <div className="w-[1118px] h-[56px] mx-auto text-white ">
        <div className="flex justify-between">
          <div className="flex gap-8 items-center">
            <h2 className="w-[105px] h-[24px] font-medium text-2xl leading-6">
              3legant
              <span className=" text-gray-500 ">.</span>
            </h2>
            <span className=" text-xl text-gray-500 ">|</span>
            <p>Gift & Decoration Store</p>
          </div>
          <div className="flex gap-7">
            <Link to="/" >Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/product">Product</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact-us">Contact Us</Link>
          </div>
        </div>

        {/* Divider line */}
        <hr className="w-full h-[2px] opacity-30 mt-12" />

        <div className="mt-4">
          <div className="flex justify-between">
            <div className="flex gap-7">
              <p className=" text-gray-300">
                Copyright © {new Date().getFullYear()} 3legant. All rights
                reserved
              </p>
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
            </div>
            <div className="flex gap-6">
              <FaInstagram size="22px" />
              <SlSocialFacebook size="22px" />
              <SlSocialYoutube size="22px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

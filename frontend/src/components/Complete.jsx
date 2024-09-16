import React from "react";

const Complete = () => {
  return (
    <div>
      {/* Complete */}
      <div className="flex flex-col justify-center items-center   mt-[50px] mb-20">
        <h2 className="w-[286px] h-[58px] font-medium leading-10 text-5xl mb-2">
          Complete!
        </h2>
        <div className="flex ">
          <span className="bg-[#38CB89] text-white border border-1 rounded-full  w-[42px] h-[42px]  items-center content-center flex justify-center">
            ✔
          </span>
          <p className="w-[256px] h-[42px] items-center mt-[8px] ml-5 font-semibold leading-6 text-lg text-[#38CB89]">
            Shopping cart
            <div className="h-[1.5px] w-[256px] bg-[#38CB89] mt-5 ml-[-55px]"></div>
          </p>
          <span className="bg-[#38CB89] text-white border border-1 rounded-full  w-[42px] h-[42px]  items-center content-center flex justify-center">
            ✔
          </span>

          <p className="w-[256px] h-[42px] items-center mt-[8px] ml-5 font-semibold leading-6 text-lg text-[#38CB89]">
            Checkout details
            <div className="h-[1.5px] w-[256px] bg-[#38CB89] mt-5 ml-[-55px]"></div>
          </p>
          <span className="bg-black text-white border border-1 rounded-full  w-[42px] h-[42px]  items-center content-center flex justify-center">
            3
          </span>
          <p className="text-black w-[256px] h-[42px] items-center mt-[8px] ml-5 font-semibold leading-6 text-lg">
            Order complete
          </p>
        </div>
      </div>

      {/* Next page */}
      <div className="flex flex-col items-center  shadow-slate-300 shadow-xl w-[738px] h-[430px] ml-80 mb-8">
        <div className="felx flex-col items-center mt-20">
          <h2 className="w-[448px] h-[34px] font-medium text-[28px] leading-8 text-[#6C7275] mb-5 ml-64">
            Thank you! 🎉
          </h2>
          <h2 className="w-[492px] h-[88px] font-medium text-[40px] leading-10 items-center ml-40">
            Your order has been <span className="ml-24"> received </span>{" "}
          </h2>
          <div>
            <button
              type="submit"
              className="bg-slate-950 hover:bg-slate-800 text-white font-bold py-2 mt-5  px-4 rounded-lg focus:outline-none focus:shadow-outline w-[203px]  h-[52px] ml-60 mb-20"
            >
              Purchase history
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complete;

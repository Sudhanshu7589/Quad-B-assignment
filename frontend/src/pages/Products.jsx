import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { GoHeartFill, GoHeart } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa6";
import Cards from "../components/Cards";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";
const firstExample = {
  size: 20,
  edit: false,
  value: 4,
};

const color = {
  red: {
    name: "Red",
    value: "#FF5733",
  },
  black: {
    name: "Black",
    value: "#020000",
  },
  yellow: {
    name: "Yellow",
    value: "#f9f148",
  },
  green: {
    name: "Green",
    value: "#24a30d",
  },
  blue: {
    name: "Blue",
    value: "#487bf9",
  },
};

const Products = ({ products }) => {
  const [chooseColor, setChooseColor] = useState("Red");
  const [count, setCount] = useState(1);
  const [heart, SetHeart] = useState(false);
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const filteredData = products.filter(
      (product) => productId === product._id
    );
    setProductData(filteredData[0]); // Assuming productId is unique
  }, [products, productId]);

  console.log("productData", productData);

  const dispatch = useDispatch();

  return (
    <div className=" w-10/12 mx-auto  ">
      <div className="flex  gap-3 my-4  text-gray-400">
        <Link to={"/"}>Home {">"}</Link>
        <Link to={"/shop"}>Shop {">"}</Link>
        <Link to={`/shop/product`}>
          {productData?.category} {">"}
        </Link>
        <p className="text-black font-medium leading-6 ">Products </p>
      </div>

      <div className="flex gap-24">
        <div className=" w-[548px]">
          <div className="flex gap-4 mb-4">
            <img
              src={productData?.productImages[0]}
              alt=""
              className="max-w-[262px] max-h-[349px]"
            />
            <img
              src={productData?.productImages[1]}
              alt=""
              className="max-w-[262px] max-h-[349px]"
            />
          </div>
          <div className="flex gap-4 mb-4">
            <img
              src={productData?.productImages[2]}
              alt=""
              className="max-w-[262px] max-h-[349px]"
            />
            <img
              src={productData?.productImages[3]}
              alt=""
              className="max-w-[262px] max-h-[349px]"
            />
          </div>
          <div className="flex gap-4 mb-4">
            <img
              src={productData?.productImages[4]}
              alt=""
              className="min-w-[548px] max-h-[349px]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-8 ">
          <div className="flex items-center gap-3">
            <ReactStars {...firstExample} />
            <span className=" leading-5 text-sm ">11 Reviews</span>
          </div>

          <h2 className="font-medium text-4xl leading-10">
            {productData?.productTitle}
          </h2>
          <p className=" w-[508px] h-[78px] text-base leading-7">
            {productData?.productDescription}
          </p>
          <div className="flex items-center gap-16 font-medium text-3xl leading-8">
            <p className="w-[56px] h-[22px]">
              ${productData?.discountPrice}.00
            </p>
            <strike className="text-gray-500 mt-2">
              ${productData?.originalPrice}.00
            </strike>
          </div>

          <div className="w-full h-[1px] bg-gray-300"></div>
          <div className="w-full">
            <p className="w-[130px] h-[26px] font-semibold leading-6 text-base text-gray-400">
              Measurements
            </p>
            <p className="w-[140px] h-[26px] font-semibold leading-8 text-xl ">
              {productData?.measurements} "
            </p>
          </div>
          <div className=" flex flex-col gap-3">
            <p className="text-gray-400 font-semibold leading-7 text-base">
              Choose Color {">"}
            </p>
            <p className="text-xl leading-8">{chooseColor}</p>
            <div className="flex gap-2">
              {Object.entries(color).map(([key, value], i) => (
                <div
                  className={`w-[20px] h-[20px] rounded-full cursor-pointer ${
                    chooseColor === value.name ? "w-[35px] h-[30px]" : ""
                  }`}
                  style={{ backgroundColor: value.value }}
                  key={i}
                  title={value.name}
                  onClick={() => setChooseColor(value.name)}
                ></div>
              ))}
            </div>
          </div>

          <div className="flex gap-3 ">
            <div className="flex gap-6 bg-gray-200 w-[127px] h-[52px] rounded-lg px-[12px]">
              <button
                disabled={count === 1}
                onClick={() => setCount(count - 1)}
                className=" text-4xl w-[20] h-[20px] mt-1"
              >
                -
              </button>
              <p className=" text-2xl w-[20] h-[20px] mt-3 ">{count}</p>
              <button
                className=" text-4xl w-[20] h-[20px] mt-1"
                disabled={count === 9}
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
            </div>
            <div
              className="flex items-center justify-center w-[70%] border border-black rounded-lg"
              onClick={() => SetHeart(!heart)}
            >
              {heart ? (
                <GoHeartFill size="25px" color="#C70039 " />
              ) : (
                <GoHeart size="25px" />
              )}
              <span className=" ml-4">Wishlist</span>
            </div>
          </div>

          <button
            type="submit"
            className="bg-slate-950 w-[508px] h-[52px] hover:bg-slate-800 text-white font-bold py-2 mt-5 px-4 rounded-lg focus:outline-none focus:shadow-outline "
            onClick={() => dispatch(addToCart(productData))}
          >
            Add to Cart
          </button>
          <div className="">
            <details>
              <summary className="font-medium leading-8 text-lg">
                Additional Info
              </summary>
              {/* <div className="h-[1px] w-full"></div> */}
              <p className="font-semibold leading-6 text-normal mb-3 text-gray-400">
                Details
              </p>
              <p className="text-sm">
                You can use the removable tray for serving. The design makes it
                easy to put the tray <br /> back after use since you place it
                directly on the table frame without having to fit it into <br />
                any holes.
              </p>
              <p className="font-semibold leading-6 text-normal mt-3 mb-3 text-gray-400">
                Packaging
              </p>
              <div className="text-sm leading-5  text-black">
                <p className="mb-1">
                  Width: 20 " Height: 1 ½ " Length: 21 ½ "{" "}
                </p>
                <p className="mb-1"> Weight: 7 lb 8 oz </p>{" "}
                <p className="mb-1"> Package(s): 1</p>
              </div>
            </details>
            <hr className="mt-3 text-gray-400 font-bold h-[3px]" />

            <details>
              <summary className="font-medium leading-8 text-lg">
                Questions
              </summary>
            </details>
            <hr className="mt-3 text-gray-400 font-bold h-[3px]" />

            <details>
              <summary className="font-medium leading-8 text-lg">
                Reviews (11)
              </summary>
            </details>
            <hr className="mt-3 text-gray-400 font-bold h-[3px]" />
          </div>
        </div>
      </div>

      <div className=" flex justify-between mt-7 w-[1100px] h-[88px] mx-auto">
        <div>
          <h2 className=" font-medium text-3xl mt-11 ml-[-83px] leading-6">
            You might also like
          </h2>
        </div>
        <div className=" flex flex-col  mt-12 font-semibold">
          <p className="flex items-center content-center gap-2">
            More Products{" "}
            <span>
              <FaArrowRight />
            </span>
          </p>
          <div className="h-[2px] w-32 bg-gray-400"></div>
        </div>
      </div>

      <div className="ml-[-135px] mb-16">
        {" "}
        <Cards />{" "}
      </div>
    </div>
  );
};

export default Products;

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Banner1 from "../assets/Banner/Banner.svg";
import CategoryProduct from "../components/CategoryProduct";
import { FaArrowRight } from "react-icons/fa6";
import Cards from "../components/Cards";
import Service from "../components/Service";
import { CiDeliveryTruck } from "react-icons/ci";
import { PiMoneyLight } from "react-icons/pi";
import { SlLock } from "react-icons/sl";
import { IoCallOutline } from "react-icons/io5";
import BannerPage from "../components/BannerPage";
function Home({ products }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className=" mx-auto mt-6 items-center">
      <Slider {...settings}>
        <div className="relative mx-auto flex w-11/12 max-w-maxContent items-center justify-between mt-1">
          <img src={Banner1} alt="" className="h-auto mx-auto w-[80%]" />
        </div>
        <div className="relative mx-auto flex w-11/12 max-w-maxContent items-center justify-between mt-1">
          <img src={Banner1} alt="" className="h-auto mx-auto w-[80%]" />
        </div>
        <div className="relative mx-auto flex w-11/12 max-w-maxContent items-center justify-between mt-1">
          <img src={Banner1} alt="" className="h-auto mx-auto w-[80%]" />
        </div>
        <div className="relative mx-auto flex w-11/12 max-w-maxContent items-center justify-between mt-1">
          <img src={Banner1} alt="" className="h-auto mx-auto w-[80%]" />
        </div>
      </Slider>

      <div className="w-[80%] flex gap-[24px] mx-auto mt-6 items-center">
        <div className="text-black w-[643px] h[152px] font-medium text-6xl leading-tight">
          Simply Unique <span className="text-slate-500	">/</span> <br />
          Simply Better.
        </div>
        <div className="text-gray-700 leading-tight font-normal ml-8">
          <span className="text-black  text-lg font-semibold">3legant </span>
          is a gift & decorations store based in HCMC,
          <br /> Vietnam. Est since 2019.
        </div>
      </div>

      <CategoryProduct />

      <div className=" flex justify-between mt-7 w-[1100px] h-[88px] mx-auto">
        <div>
          <h2 className=" font-medium text-4xl leading-6">
            New <br /> <br />
            Arrivals
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

      <Cards products={products} />

      {/* service  */}
      <div className=" flex gap-[20px] ml-36">
        <Service
          icon={<CiDeliveryTruck size={40} />}
          heading={"Free Shipping"}
          text={"Order above $200"}
        />
        <Service
          icon={<PiMoneyLight size={40} />}
          heading={"Money-back"}
          text={"30 days guarantee"}
        />
        <Service
          icon={<SlLock size={40} />}
          heading={"Secure Payments"}
          text={"Secured by Stripe"}
        />
        <Service
          icon={<IoCallOutline size={40} />}
          heading={"24/7 Support"}
          text={"Phone and Email support"}
        />
      </div>

      <BannerPage />
    </div>
  );
}

export default Home;

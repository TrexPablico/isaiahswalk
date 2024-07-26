import React, { useEffect } from "react";
import { HiStar } from "react-icons/hi";
import thailand from "../assets/Packages/thailand.png";
import singapore from "../assets/Packages/singapore.png";
import korea from "../assets/Packages/korea.png";
import hk from "../assets/Packages/hk.png";
import group from "../assets/Packages/group.png";
import airfare from "../assets/Packages/airfare.png";
import land from "../assets/Packages/land.png";
import visa from "../assets/Packages/visa.png";
import cruise from "../assets/Packages/cruise.png";
import insurance from "../assets/Packages/insurance.png";
import bg from "../assets/Packages/bg.png";
import consult from "../assets/Packages/consultation.png";
import rental from "../assets/Packages/rental.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Packages = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      dealay: 100,
    });
  }, []);

  const Card = ({ image, text }) => {
    return (
      <div
        data-aos="zoom-in"
        className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md"
      >
        <div className="overflow-hidden rounded-2xl">
          <img
            src={image}
            alt=""
            className="rounded-2xl w-[300px] h-[300px] hoverImg"
          />
        </div>
        <h5 className="text-2xl py-4 font-semibold text-center font-ms-madi text-gray">
          {text}
        </h5>
        <span className="flex items-center justify-between w-full">
          <div
            data-aos="zoom-in"
            className="bg-white text-gray shadow rounded-sm w-16 p-2 flex items-center gap-1"
          >
            <HiStar className=" text-yellow-400" />
            Top
          </div>
          <p>(Valid until:__/__/____)</p>
          <div className="bg-primary text-white text-lg text-center w-18 p-1 rounded-md transition-bg hover:bg-white hover:text-primary cursor-pointer">
            Book Now
          </div>
        </span>
      </div>
    );
  };

  return (
    <div
      className="bg-cover min-h-[850px] w-full"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w mx-auto py-12">
        <div className="text-center mb-8">
          <p className="text-black font-ms-madi font-bold text-[80px]">
            Popular Packages
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card image={korea} text="Discover the wonders of Korea!" />
          <Card image={thailand} text="Explore the beauty of Thailand!" />
          <Card image={singapore} text="Experience the magic of Singapore!" />
          <Card image={hk} text="Uncover the charm of Hong Kong!" />
        </div>
      </div>

      <section className="max-w mx-auto relative px-3 py-12 bg-slate-200 opacity-[0.7]">
        <div
          data-aos="zoom-in"
          className="xl:text-[25rem] lg:text-[20rem] leading-[.5] absolute left-0 w-full h-full text-center z-[-1] text-gray font-semibold opacity-10"
        ></div>
        <div data-aos="zoom-in" className="text-center mb-8">
          <h2 className="text-black font-ms-madi font-bold text-[80px]">
            Services Offered
          </h2>
        </div>
        <div
          data-aos="zoom-in"
          className="flex flex-wrap gap-y-8 gap-x-12 items-center justify-center mx-auto my-12"
        >
          <span className="flex flex-col items-center">
            <img src={airfare} alt="Flight Booking" className="w-[90px]" />
            <p className="text-center font-bold">Flight Booking</p>
          </span>
          <span className="flex flex-col items-center">
            <img src={land} alt="Land Arrangements" className="w-[90px]" />
            <p className="text-center font-bold">Land Arrangements</p>
          </span>
          <span className="flex flex-col items-center">
            <img src={group} alt="Group Bookings" className="w-[90px]" />
            <p className="text-center font-bold">Customized Tours</p>
          </span>
          <span className="flex flex-col items-center">
            <img src={visa} alt="Visa Applications" className="w-[90px]" />
            <p className="text-center font-bold">Visa Applications</p>
          </span>
          {/*<span className="flex flex-col items-center">
            <img src={cruise} alt="Cruise Tour" className="w-[150px]" />
            <p className="text-center font-bold">Cruise Tour</p>
          </span>*/}
          <span className="flex flex-col items-center">
            <img src={insurance} alt="Travel Insurance" className="w-[90px]" />
            <p className="text-center font-bold">Travel Insurance</p>
          </span>
          <span className="flex flex-col items-center">
            <img
              src={rental}
              alt="Private Airport Transfers"
              className="w-[90px]"
            />
            <p className="text-center font-bold">
              Private Airport Transfers <br /> Private Tour Vehicles
            </p>
          </span>
          <span className="flex flex-col items-center">
            <img src={consult} alt="Travel Insurance" className="w-[90px]" />
            <p className="text-center font-bold">Travel Insurance</p>
          </span>
        </div>
      </section>
    </div>
  );
};

export default Packages;

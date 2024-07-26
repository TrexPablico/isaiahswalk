import React, { useEffect } from "react";
import Slider from "react-slick";
import hero from "../assets/Hero/hero.png";
import p1 from "../assets/Hero/p1.png";
import p2 from "../assets/Hero/p2.png";
import p3 from "../assets/Hero/p3.png";
import p4 from "../assets/Hero/p4.png";
import p5 from "../assets/Hero/p5.png";
import p6 from "../assets/Hero/p6.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import AOS from "aos";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      dealay: 100,
    });
  }, []);

  const getDotPosition = () => {
    if (window.innerWidth >= 1024) {
      // Large screens
      return "bottom: 150px";
    } else {
      // Smaller screens
      return "bottom: 30px";
    }
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots) => (
      <div style={{ bottom: "10px", position: "absolute", width: "100%" }}>
        <ul style={{ display: "flex", justifyContent: "center", padding: 0 }}>
          {dots}
        </ul>
      </div>
    ),
  };

  return (
    <div
      className="bg-cover h-[1000px] w-full"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="lg:flex max-w[1400px] mx-auto justify-between items-center px-3 pt-12 home">
        <div className="lg:w-2/5 lg:ml-60">
          <h2
            data-aos="fade-right"
            className="xl:text-[9rem] lg:text-[6rem] text-[5rem] lg:text-left text-center font-bold lg:leading-snug mb-5 font-ms-madi"
          >
            Isaiah's <br /> Walk
          </h2>
          <p
            data-aos="fade-left"
            className="text-black lg:text-[6rem] text-[3rem] font-ms-madi font-bold leading-normal mb-8 lg:ml-[-90px] ml-0 lg:text-left text-center"
          >
            Travel Services
          </p>
          {/*}  <div className="flex flex-1 gap-5">
            <button className="bg-primary rounded transition-bg shadow h-16 lg:w-auto outline-none text-white hover:bg-white hover:text-primary cursor-pointer text-base hover:border hover:border-primary">
              Explore more
            </button>
          </div> */}
        </div>
        <div
          data-aos="zoom-in"
          className="lg:w-3/5 flex items-center justify-center lg:pt-0 pt-10 lg:mr-40"
        >
          <Slider
            {...settings}
            className="lg:w-[650px] w-[400px] lg:h-[650px] h-[500px]"
          >
            <div>
              <img
                src={p1}
                alt="Slide 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src={p2}
                alt="Slide 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src={p3}
                alt="Slide 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src={p4}
                alt="Slide 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src={p5}
                alt="Slide 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src={p6}
                alt="Slide 2"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Add more slides as needed */}
          </Slider>
          <style>
            {`
              .slick-dots li button:before {
                color: gray; /* Change dot color */
              }

              .slick-dots li.slick-active button:before {
                color: teal; /* Optional: Change color of the active dot */
              }
            `}
          </style>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg1 from "../assets/Testimonials/bg1.png";
import p1 from "../assets/Testimonials/p1.png";
import p2 from "../assets/Testimonials/p2.png";
import p3 from "../assets/Testimonials/p3.png";
import p4 from "../assets/Testimonials/p4.png";
import p5 from "../assets/Testimonials/p5.png";
import p6 from "../assets/Testimonials/p6.png";
import p7 from "../assets/Testimonials/p7.png";
import p8 from "../assets/Testimonials/p8.png";
import p9 from "../assets/Testimonials/p9.png";
import p10 from "../assets/Testimonials/p10.png";
import p11 from "../assets/Testimonials/p11.png";
import p12 from "../assets/Testimonials/p12.png";
import p13 from "../assets/Testimonials/p13.png";
import p14 from "../assets/Testimonials/p14.png";
import p15 from "../assets/Testimonials/p15.png";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
  p12,
  p13,
  p14,
  p15,
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      dealay: 100,
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjusted to show 4 slides at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div
      className="bg-cover h-[800px] w-full py-8 testimonials"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <div className="max-w-[1400px] mx-auto px-3 pt-12">
        <div className="items-center object-center py-5  text-center">
          <h1 className="text-[80px] font-ms-madi font-bold">Testimonials</h1>
        </div>
        <Slider {...settings} className="slick-slider">
          {images.map((image, index) => (
            <div data-aos="zoom-in" key={index} className="px-4">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="slide-image"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;

import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client from "../assets/Clients/client.png";
import p1 from "../assets/Clients/p1.jpg";
import p2 from "../assets/Clients/p2.jpg";
import p3 from "../assets/Clients/p3.jpg";
import p4 from "../assets/Clients/p4.jpg";
import p5 from "../assets/Clients/p5.jpg";
import p6 from "../assets/Clients/p6.jpg";
import p7 from "../assets/Clients/p7.jpg";
import p8 from "../assets/Clients/p8.jpg";
import p9 from "../assets/Clients/p9.jpg";
import p10 from "../assets/Clients/p10.jpg";
import p11 from "../assets/Clients/p11.jpg";
import p12 from "../assets/Clients/p12.jpg";
import p13 from "../assets/Clients/p13.jpg";
import p14 from "../assets/Clients/p14.jpg";
import p15 from "../assets/Clients/p15.jpg";
import p16 from "../assets/Clients/p16.jpg";
import p17 from "../assets/Clients/p17.jpg";
import p18 from "../assets/Clients/p18.jpg";
import p19 from "../assets/Clients/p19.jpg";
import p20 from "../assets/Clients/p20.jpg";
import p21 from "../assets/Clients/p21.jpg";
import p22 from "../assets/Clients/p22.jpg";
import p23 from "../assets/Clients/p23.jpg";
import p24 from "../assets/Clients/p24.jpg";
import p25 from "../assets/Clients/p25.jpg";
import p26 from "../assets/Clients/p26.jpg";
import p27 from "../assets/Clients/p27.jpg";
import p28 from "../assets/Clients/p28.jpg";
import p29 from "../assets/Clients/p29.jpg";
import p30 from "../assets/Clients/p30.jpg";
import p31 from "../assets/Clients/p31.jpg";
import p32 from "../assets/Clients/p32.jpg";
import p33 from "../assets/Clients/p33.jpg";
import p34 from "../assets/Clients/p34.jpg";
import p35 from "../assets/Clients/p35.jpg";
import p36 from "../assets/Clients/p36.jpg";
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
  p16,
  p17,
  p18,
  p19,
  p20,
  p21,
  p22,
  p23,
  p24,
  p25,
  p26,
  p27,
  p28,
  p29,
  p30,
  p31,
  p32,
  p33,
  p34,
  p35,
  p36,
];

const Clients = () => {
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
    slidesToShow: 4, // Adjusted to show 4 slides at a time
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
      className="bg-cover h-[800px] w-full py-8 mt-[50px] valued-clients"
      style={{ backgroundImage: `url(${client})` }}
    >
      <div className="max-w-[1400px] mx-auto px-3 pt-12">
        <div className="items-center object-center py-8 text-center">
          <h1 className="text-[80px] font-ms-madi font-bold">
            Our Valued Clients
          </h1>
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

export default Clients;

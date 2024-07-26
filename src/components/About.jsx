import React, { useEffect } from "react";
import about from "../assets/About/about.png";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      dealay: 100,
    });
  }, []);

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center gap-16 lg:mt-44 mt-20 lg:px-80 p-6 relative mb-[100px] about">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="text-center mb-8">
              <p className="text-black font-ms-madi font-bold text-[80px]">
                About us
              </p>
            </div>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className="flex items-start lg:flex-row flex-col gap-12"
        >
          <img
            src={about}
            alt="aboutImg1"
            className="w-[600px] h-[600px] object-cover"
          />
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="flex flex-col"
          >
            <span className="font-medium text-xl text-black mt-12">
              Isaiah's Walk Travel Services aims to delight valued VIP clients,
              new or returning, with their travel and tour packages, whether
              local or international.
            </span>
            <span className="text-lg text-disabled mt-6">
              ✓ Isaiah's Walk Travel Services provides services that go the
              extra mile, from inquiring and booking to tour execution and
              monitoring.<p></p>
              <br></br>✓ Our team is dedicated to providing its valued VIP
              clients with an affordable tour package with king and queen
              services.<p></p>
              <br></br>✓ We at Isaiah's take care of your relaxation investment
              by providing private cars, kind tour guides, budget travel and
              tour packages, early bird discounts, installment plans, and
              souvenir items.<p></p>
              <br></br>✓ We innovate continuously. From 2008 local and Asia
              tours, now in 2024, we serve Europe, Australia, Sydney, and more
              to come. We are committed to meeting your present and dream travel
              needs.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

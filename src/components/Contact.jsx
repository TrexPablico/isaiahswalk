import React, { useEffect, useRef } from "react";
import message from "../assets/Contact/message.png";
import email from "../assets/Contact/mail.png";
import fb from "../assets/Contact/fb.png";
import phone from "../assets/Contact/phone.png";
import location from "../assets/Contact/location.png";
import cbg from "../assets/Contact/cbg.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      dealay: 100,
    });
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Implement your email sending logic here
  };

  return (
    <>
      <div
        className="bg-cover h-[815px] w-full py-8 mt-6 contact-us"
        style={{ backgroundImage: `url(${cbg})` }}
      >
        <div className="items-center object-center py-5  text-center">
          <h1 className="text-[80px] font-ms-madi font-bold">Contact Us</h1>
        </div>
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-3 text-center">
            <div className="flex items-center mb-12 gap-2"></div>
          </div>
          <div className="flex lg:flex-row flex-col flex-wrap gap-[12rem]">
            <div className="flex-1 text-gray-600 mb-8 sm:mb-0 sm:pr-4">
              <h3 className="text-[#000f38] font-medium text-2xl flex items-center mb-5">
                Send us a Message
                <img src={message} alt="message icon" className="w-9 ml-2" />
              </h3>
              <p className="max-w-lg leading-relaxed">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
                nam inventore dignissimos libero blanditiis est unde soluta
                similique modi eaque.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat reprehenderit hic repudiandae sed recusandae facere!
              </p>
              <ul className="mt-5">
                <li key="social" className="flex items-center mb-5">
                  <a href="https://www.facebook.com/profile.php?id=100088881901138">
                    <img
                      src={fb}
                      alt="fb icon"
                      className="w-6 mr-3 transition-transform transform hover:scale-110"
                    />
                  </a>
                  Isaiah's Walk Travel Services
                </li>
                <li key="email" className="flex items-center mb-5">
                  <a href="mailto:ramfireemail">
                    <img
                      src={email}
                      alt="email icon"
                      className="w-6 mr-3 transition-transform transform hover:scale-110"
                    />
                  </a>
                  centralreservations@isaiahswalktravelservices.com
                </li>
                <li key="phone" className="flex items-center mb-5">
                  <a href="tel:+63">
                    <img
                      src={phone}
                      alt="phone icon"
                      className="w-6 mr-3 transition-transform transform hover:scale-110"
                    />
                  </a>
                  +63 931 041 0151 / +63 995 293 6394
                </li>
                <li key="location" className="flex items-center gap-2">
                  <a href="https://maps.app.goo.gl/H3bniaPt64rdo5YR7">
                    <img
                      src={location}
                      alt="location icon"
                      className="w-6 mr-4 transition-transform transform hover:scale-110 "
                    />
                  </a>
                  Unit 7A B22 L1 Graceville 1, Muzon Proper, San Jose Del Monte
                  Bulacan
                </li>
              </ul>
            </div>

            <div className="flex-1 lg:mt-[0px] sm:mt-[-80px]">
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <label className="block text-gray-700">Your Name</label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Enter your name"
                  required
                  className="w-full bg-[#d4d4d4] p-4 border-0 outline-none mb-4 rounded-md"
                />
                <label className="block text-gray-700">Your Email</label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="example@email.com"
                  required
                  className="w-full bg-[#d4d4d4] p-4 border-0 outline-none mb-4 rounded-md"
                />
                <label className="block text-gray-700">Your Message here</label>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Enter your message"
                  required
                  className="w-full bg-[#d4d4d4] p-4 border-0 outline-none mb-4 resize-none rounded-md"
                ></textarea>
                <button
                  type="submit"
                  className="bg-[#1dcfdb] text-white py-2 px-4 rounded hover:bg-[#2b777c] transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

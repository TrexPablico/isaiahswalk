import React, { useState, useEffect } from "react";
import pbg from "../assets/Allpackage/pbg.png";
import pack1 from "../assets/Allpackage/pack1.png";
import pack2 from "../assets/Allpackage/pack2.png";
import pack3 from "../assets/Allpackage/pack3.png";
import pack4 from "../assets/Allpackage/pack4.png";
import pack5 from "../assets/Allpackage/pack5.png";
import pack6 from "../assets/Allpackage/pack6.png";
import pack7 from "../assets/Allpackage/pack7.png";
import pack8 from "../assets/Allpackage/pack8.png";
import pack9 from "../assets/Allpackage/pack9.png";
import pack10 from "../assets/Allpackage/pack10.png";
import pack11 from "../assets/Allpackage/pack11.png";
import pack12 from "../assets/Allpackage/pack12.png";
import pack13 from "../assets/Allpackage/pack13.png";
import pack14 from "../assets/Allpackage/pack14.png";
import pack15 from "../assets/Allpackage/pack15.png";
import pack16 from "../assets/Allpackage/pack16.png";
import pack17 from "../assets/Allpackage/pack17.png";
import pack18 from "../assets/Allpackage/pack18.png";
import pack19 from "../assets/Allpackage/pack19.png";
import pack20 from "../assets/Allpackage/pack20.png";
import pack21 from "../assets/Allpackage/pack21.jpg";
import pack22 from "../assets/Allpackage/pack22.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Allpackage = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
      dealay: 50,
    });
  }, []);

  const [categories, setCategories] = useState([
    { title: "All", active: true },
    { title: "Asia", active: false },
    { title: "Europe", active: false },
    { title: "Domestic", active: false },
  ]);

  const packages = [
    {
      package: "West Europe Tour Package",
      title: "Europe",
      image: pack1,
    },
    {
      package: "Northern Lights Tour Package",
      title: "Europe",
      image: pack2,
    },
    {
      package: "7 Day Switzerland Tour Package",
      title: "Europe",
      image: pack3,
    },
    {
      package: "UK Tour Package A",
      title: "Europe",
      image: pack4,
    },
    {
      package: "Scandanavian Tour(Pink Line Route)",
      title: "Europe",
      image: pack5,
    },
    {
      package: "Wonders of Europe(Orange Line Route)",
      title: "Europe",
      image: pack6,
    },
    {
      package: "Go North B(Purple Line Route B)",
      title: "Europe",
      image: pack7,
    },
    {
      package: "Go North A(Purple Line Route A)",
      title: "Europe",
      image: pack8,
    },
    {
      package: "Priceless Europe(Blue Line Route",
      title: "Europe",
      image: pack9,
    },
    {
      package: "Switzerland-Italy-France",
      title: "Europe",
      image: pack10,
    },
    {
      package: "England-Scotland + Loch Ness",
      title: "Europe",
      image: pack11,
    },
    {
      package: "Germany-Netherlands-Belgium-France-Luxemberg",
      title: "Europe",
      image: pack12,
    },
    {
      package: "Yellow Line Sunny Side Up Spain & Portugal",
      title: "Europe",
      image: pack13,
    },
    {
      package: "Morroco Tour Package",
      title: "Europe",
      image: pack14,
    },

    {
      package: "Go East Blue Line",
      title: "Europe",
      image: pack15,
    },
    {
      package: "Travel To Bangkok",
      title: "Asia",
      image: pack16,
    },
    {
      package: "Travel To Singapore",
      title: "Asia",
      image: pack17,
    },
    {
      package: "Explore Hong Kong",
      title: "Asia",
      image: pack18,
    },
    {
      package: "Journey To Seoul Korea",
      title: "Asia",
      image: pack19,
    },
    {
      package: "Tokyo or Osaka Sakura",
      title: "Asia",
      image: pack20,
    },
    {
      package: "Travel to Iceland",
      title: "Europe",
      image: pack21,
    },
    {
      package: "Spain & United Kingdom",
      title: "Europe",
      image: pack22,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [packageToShow, setPackageToShow] = useState(3);

  const handleClick = (title) => {
    setSelectedCategory(title);
    setPackageToShow(3);
  };

  const filterPackage =
    selectedCategory === "All"
      ? packages
      : packages.filter((packages) =>
          packages.title.includes(selectedCategory)
        );

  const showMorePackage = () => {
    setPackageToShow((prev) => prev + 3);
  };

  return (
    <div
      className="bg-cover h-full w-full tour-packages"
      style={{ backgroundImage: `url(${pbg})` }}
    >
      <div className="w-full flex flex-col items-center justify-center gap-6 lg:mt-44 mt-20 lg:px-80 p-5">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="text-[80px] font-bold text-center font-ms-madi">
              Our Packages
            </span>
          </div>
        </div>
        <div className="w-full flex items-center justify-between overflow-x-auto">
          <div className="flex items-center gap-11 lg:pb-0 pb-3">
            {categories.map((item) => (
              <div
                key={item.title}
                onClick={() => handleClick(item.title)}
                className={`${
                  item.title === selectedCategory
                    ? "text-primary"
                    : "text-disabled"
                } text-lg font-medium cursor-pointer whitespace-nowrap`}
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="flex flex-wrap justify-center gap-6 mt-6"
        >
          {filterPackage.slice(0, packageToShow).map((packages) => (
            <div key={packages.package} className="max-w-xs">
              <img
                src={packages.image}
                alt={packages.title}
                className="w-full h-[450px] object-fit rounded-lg"
              />
              <p className="text-lg font-medium mt-2 text-center">
                {packages.package}
              </p>
              <p className="text-sm text-center">{packages.title}</p>
            </div>
          ))}
        </div>
        {filterPackage.length > packageToShow && (
          <div className="flex justify-center mt-4">
            <button
              onClick={showMorePackage}
              className="text-lg font-medium text-primary cursor-pointer"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Allpackage;

import React, { useState } from "react";
import Card from "./Card";
import japan from "../assets/Featured/japan.jpg";
import brazil from "../assets/Featured/brazil.jpg";
import switz from "../assets/Featured/switz.jpg";
import malaysia from "../assets/Featured/malaysia.jpg";

const Featured = () => {
  return (
    <div className="h-[850px] px-4 rounded-md top-4 right-4 z-10 font-bold flex flex-col items-center justify-center text-lg">
      <span className="flex flex-col items-center">
        <p className="text-primary font-bold capitalize tracking-[0.15em]">
          Featured Tours
        </p>
        <h2 className="text-4xl text-center font-bold capitalize my-4">
          Stunning Destinations Across the Globe
        </h2>
      </span>
      <div className="flex lg:flex-1 lg:flex-row flex-col gap-8 my-12 h-full">
        <Card
          amount="13,000"
          country="Brazil"
          image={brazil}
          packages="1"
          rows="2"
        />
        <div className="flex flex-col gap-8">
          <Card
            amount="18,000"
            country="Japan"
            image={japan}
            packages="3"
            rows="1"
          />
          <Card
            amount="33,000"
            country="Switzerland"
            image={switz}
            packages="2"
            rows="1"
          />
        </div>
        <Card
          amount="53,000"
          country="Malaysia"
          image={malaysia}
          packages="4"
          rows="2"
        />
      </div>
    </div>
  );
};

export default Featured;

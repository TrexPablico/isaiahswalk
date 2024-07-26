import React from "react";

const Card = ({ packages, image, country, amount, rows }) => {
  return (
    <div
      className={`row-span-${rows} flex flex-col p-4 border rounded-lg shadow-lg bg-white`}
    >
      <img
        src={image}
        alt={`${country}`}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="mt-4">
        <h3 className="text-2xl font-bold">{country}</h3>
        <p className="text-gray-500">{amount} USD</p>
        <p className="text-gray-500">{packages} packages</p>
      </div>
    </div>
  );
};

export default Card;

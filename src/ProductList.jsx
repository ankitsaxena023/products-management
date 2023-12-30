import React, { useState } from "react";

const ProductList = ({ item, handleBuyOne, handleBuyTwo, handleBuyThree }) => {
  const { id, itemName, description, price, quantity } = item;
  console.log(id, itemName, description, price, quantity);

  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center mb-4 md:flex-row lg:flex-row">
        <div>
          <ul className="flex gap-4 text-2xl">
            <li>{itemName}</li>
            <li>{description}</li>
            <li>{price}</li>
            <li>{quantity}</li>
          </ul>
        </div>
        <div className="text-2xl flex gap-4">
          <button
            className="bg-teal-800 px-4 py-2 rounded-md hover:bg-teal-500"
            onClick={() => handleBuyOne(id)}
          >
            Buy1
          </button>
          <button
            className="bg-teal-800 px-4 py-2 rounded-md hover:bg-teal-500"
            onClick={() => handleBuyTwo(id)}
          >
            Buy2
          </button>
          <button
            className="bg-teal-800 px-4 py-2 rounded-md hover:bg-teal-500"
            onClick={() => handleBuyThree(id)}
          >
            Buy3
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductList;

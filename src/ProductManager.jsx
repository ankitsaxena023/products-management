import React, { useState } from "react";
import ProductList from "./ProductList";

const Productmanager = ({ data, setData }) => {
  const [item, setItem] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [newQuantity, setNewQuantity] = useState(quantity);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      itemName: item,
      description: desc,
      price: price,
      quantity: quantity,
    };

    setData((prev) => [...prev, newProduct]);
    setItem("");
    setDesc("");
    setPrice("");
    setQuantity("");
  };

  const handleBuyOne = (id) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const handleBuyTwo = (id) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 2 } : item
      )
    );
  };

  const handleBuyThree = (id) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 3 } : item
      )
    );
  };

  console.log("data", data);

  return (
    <>
      <h1 className="text-3xl text-center m-4">Products Table</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-2 text-center flex-col justify-center items-center">
            <div className="flex flex-col max-w-48">
              <label className="mr-4">Item Name</label>
              <input
                type="text"
                value={item}
                onChange={(e) => setItem(e.target.value)}
              />
            </div>
            <div className="flex flex-col max-w-48">
              <label>Description</label>
              <input
                type="text"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <div className="flex flex-col max-w-48">
              <label>Price</label>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="flex flex-col max-w-48">
              <label>Quantity</label>
              <input
                type="text"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
          </div>
          <div className="mx-auto my-4 flex justify-center items-center">
            <button className="bg-teal-800 px-4 py-2 rounded-md hover:bg-teal-500">
              Add Item
            </button>
          </div>
        </form>
      </div>
      {data.map((item, i) => {
        return (
          <ProductList
            key={i}
            item={item}
            setData={setData}
            data={data}
            handleBuyOne={() => handleBuyOne(item.id)}
            handleBuyTwo={() => handleBuyTwo(item.id)}
            handleBuyThree={() => handleBuyThree(item.id)}
          />
        );
      })}
    </>
  );
};

export default Productmanager;

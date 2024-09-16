import React from "react";
import Card from "./Card";

const Cards = ({ products }) => {
  return (
    <div className="flex mt-7 ml-36 gap-2 overflow-y-hidden mx-auto">
      {products?.map((product) => {
        return <Card product={product} key={product._id} />;
      })}
    </div>
  );
};

export default Cards;

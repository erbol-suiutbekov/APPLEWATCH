import React from "react";
import { useSelector } from "react-redux";
import ProductCards from "./ProductCards";

function Product() {
  const { product, search } = useSelector((s) => s);
  const searchInp = product.filter((ele) => {
    return ele.name.toLowerCase().includes(search.trim().toLowerCase());
  });





  console.log(search);
  return (
    <div className="container">
      <div className=" flex flex-wrap gap-[47px]">
        {searchInp.map((el, key) => (
          <ProductCards item={el} key={key} />
        ))}
      </div>
    </div>
  );
}

export default Product;

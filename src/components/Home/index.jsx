import React from "react";
import { useSelector } from "react-redux";
import ProductCards from "../Product/ProductCards";

function Home() {
  const { product } = useSelector((s) => s);
  return (
    <div>
      <div className="container">
        <div className=" flex flex-wrap gap-[47px]">
          {product
            .filter((fil) => fil.price > 2000)
            .map((el) => (
              <ProductCards item={el} key={el.id} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

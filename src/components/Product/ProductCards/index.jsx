import React from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";
import { MdFavorite } from "react-icons/md";

function ProductCards({ item }) {
  const { basket } = useSelector((s) => s);
  const dispatch = useDispatch();
  const allNum = [1, 2, 3, 4, 5];

  const someBas = basket.some((ko) => ko.id === item.id);
  const productBasket = () => {
    if (someBas) {
      alert(404);
    } else {
      dispatch({ type: "BAS_PRODUCT", payload: item });
    }
  };
  return (
    <div>
      <div className=" w-[310px] h-[390px] flex items-center flex-col relative bg-slate-100 rounded-[20px]">
        {someBas ? (
          <a
            className="absolute text-2xl bottom-2 text-red-600 right-2"
            onClick={() => productBasket()}
          >
            <FaCartShopping />
          </a>
        ) : (
          <a
            className="absolute text-2xl bottom-2 right-2"
            onClick={() => productBasket()}
          >
            <FaCartShopping />
          </a>
        )}
        <a  className=" absolute text-2xl bottom-2 right-10">
          <MdFavorite />
        </a>
        
        <a
          className=" absolute top-2 right-2 text-2xl "
          onClick={() => dispatch({ type: "DEL_PRODUCT", payload: item.id })}
        >
          <IoCloseOutline />
        </a>
        <img className=" w-[190px] rounded-[20px] mt-5" src={item.url} alt="" />
        <div className=" flex">
          {allNum.map((num) =>
            num <= item.rating ? (
              <a className="flex gap-2 mt-3 text-yellow-400 text-[25px]">
                <MdOutlineStarPurple500 />
              </a>
            ) : (
              <a className="flex gap-2 mt-3 text-gray-500 text-[25px]">
                <MdOutlineStarPurple500 />
              </a>
            )
          )}
        </div>
        <h1 className=" text-[20px] font-bold">{item.name}</h1>
        {item.price > 2000 ? (
          <h1 className=" absolute bottom-2 left-[36px] text-gray-400">
            <span className=" text-red-500 text-[14px] font-bold">-30% </span>
            {Math.floor((item.price * 70) / 100)}$
          </h1>
        ) : null}

        {item.price >= 2000 ? (
          <strike>
            <h2 className=" text-[25px] font-bold text-orange-400">
              {item.price}₽
            </h2>
          </strike>
        ) : (
          <h2 className=" text-[25px] font-bold text-orange-400">
            {item.price}₽
          </h2>
        )}
      </div>
    </div>
  );
}

export default ProductCards;

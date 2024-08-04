import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Admin() {
    const [urlProduct, setUrlProduct] = useState('')
    const [nameProduct, setNameProduct] = useState('')
    const [priceProduct, setPriceProduct] = useState('')
  const { product } = useSelector((s) => s);
  const dispatch = useDispatch();
  const somePro = product.some((el) => el.name === nameProduct)
  const randomRating = Math.floor(Math.random() * 6)

 
  const ProductAdmin = () => {
    if (somePro) {
      alert('такой продукт существует!')
    }
    else {
      const newPro = {
        id: new Date(),
        url: urlProduct,
        name: nameProduct,
        price: priceProduct,
        rating:randomRating
    };
    setNameProduct('')
    setPriceProduct('')
    setUrlProduct('')
    dispatch({type: 'NEW_PRODUCT', payload: newPro})
    }
    
  };
  return (
    <div>
      <div className="container">
        <div className=" flex flex-col items-center gap-8">
          <input
            type="text"
            placeholder="Product Url"
            className=" text-1xl outline-none border-b-2 border-black border-solid py-2 w-[400px]"
            onChange={(e) => setUrlProduct(e.target.value)}
            value={urlProduct}
          />
          <input
            type="text"
            placeholder="Product Name"
            className=" text-1xl outline-none border-b-2 border-black border-solid py-2 w-[400px]"
            onChange={(e) => setNameProduct(e.target.value)}
            value={nameProduct}
          />
          <input
            type="text"
            placeholder="Product Price"
            className=" text-1xl outline-none border-b-2 border-black border-solid py-2 w-[400px]"
            onChange={(e) => setPriceProduct(e.target.value)}
            value={priceProduct}
          />
          <button className=" py-2 text-white px-8 rounded-[15px] bg-blue-600"
          onClick={() => ProductAdmin()}
          >
            addToCard
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admin;

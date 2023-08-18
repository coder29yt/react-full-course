import React, { useContext } from "react";
import { PropagateLoader } from "react-spinners";
import ProductContext from "../context/ProductContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(ProductContext);

  return (
    <div className="lg:w-[70vw] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10  justify-center items-center mb-10">
      {cart.length == "" ? (
        <h1 className="font-bold text-2xl lg:w-[80vw] text-center text-gray-500 ">
          Noting to show....
        </h1>
      ) : (
        cart.map((product) => {
          return (
            <div
              key={product.id}
              className="bg-gray-100 mx-auto w-[80vw] lg:w-[20vw] rounded-md overflow-hidden shadow-md"
            >
              <img
                src={product.thumbnail}
                alt=""
                className="rounded-md rounded-bl-none rounded-br-none hover:scale-105 transition-all w-full h-[200px]"
              />
              <div className="p-2">
                <h2 className="font-bold uppercase text-gray-600">
                  {product.title}
                </h2>
                <p className="text-xs">{product.description}</p>
                <div className="flex justify-between items-center my-1">
                  <span className="font-bold text-gray-600">
                    Price : ${product.price}
                  </span>
                  <button
                    onClick={() => removeFromCart(product)}
                    className="bg-gray-700 hover:bg-white hover:text-gray-700 border-2 border-transparent hover:border-gray-700 text-white font-bold px-3 rounded-md "
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Cart;

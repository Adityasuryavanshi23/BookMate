import { useState } from "react";
import { CartCheckout } from "./CartCheckout";
import { useCart } from "../../../context/cartContext";
import { CartCard } from "./CartCard";

export const CartList = () => {
  const [checkout, setcheckout] = useState();
  const { cartList, total } = useCart();

  return (
    <>
      {checkout && <CartCheckout setcheckout={setcheckout} />}
      <h1 className="text-center text-3xl mb-8 font-semibold capitalize ">
        my cart ({cartList.length})
      </h1>

      <div className="max-w-screen-md  m-auto ">
        {cartList.map((item) => (
          <CartCard key={item.id} item={item} />
        ))}
        <div className="flex justify-between my-4">
          <h1 className="capitalize font-medium text-2xl">total amount :</h1>
          <p className="font-medium text-2xl text-green-500">${total}</p>
        </div>

        <div className="text-right my-4">
          <button
            onClick={() => setcheckout(true)}
            className="uppercase rounded-md hover:bg-blue-900  bg-blue-600 px-4 py-2 font-medium"
          >
            place order
          </button>
        </div>
      </div>
    </>
  );
};

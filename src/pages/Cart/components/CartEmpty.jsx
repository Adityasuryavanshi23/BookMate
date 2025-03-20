import { useNavigate } from "react-router";

export const CartEmpty = () => {
  const nav = useNavigate();
  return (
    <section className="max-w-screen-md  border border-gray-500 mx-auto mt-12 py-4">
      <div>
        <div className="bi bi-cart cursor-pointer  text-[90px] text-green-600 text-center"></div>
        <p className="text-center">Ooops! your cart looks empty!</p>
        <p className="text-center mt-1">
          Add eBooks to your cart from our store collection.
        </p>
        <div className="text-center mt-4">
          <button
            onClick={() => nav("/productslist")}
            className="bg-blue-700 px-3 py-2 font-medium rounded-md hover:bg-blue-900"
          >
            Countinue Shopping
            <span className="bi bi-cart cursor-pointer ml-2"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

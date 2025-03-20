/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router";
import { Rating } from "./Rating";
import { useCart } from "../../context/cartContext";
import { toast } from "react-toastify";

export const ProductsCard = ({ product }) => {
  const { id, name, overview, poster, price, best_seller, rating, in_stock } =
    product;
  const { cartList, cartItemRemove, addCartItem } = useCart();
  const nav = useNavigate();
  const token = sessionStorage.getItem("token");
  const handleadd = (product) => {
    if (!token) {
      nav("/login");
      toast.error("Please login First to add item to cart");
    } else {
      addCartItem(product);
      toast.success("Item added to cart successfully");
    }
  };

  const updatecart = cartList.find((item) => item.id === id);

  return (
    <div className="max-w-sm border-2 dark:border-gray-600 dark:bg-slate-900  mt-8 rounded-md  shadow-md">
      <div className="relative">
        <Link to={`/product/${id}`}>
          {best_seller && (
            <span className="absolute top-3 left-2 bg-orange-500 capitalize text-sm md:text-md rounded px-2 text-white">
              best seller
            </span>
          )}

          <img
            src={poster}
            alt={name}
            className="w-full h-[250px]  object-cover"
          />
        </Link>
      </div>
      <div className="p-2">
        <Link to={`/product/${id}`}>
          <h1 className=" text-xl  h-[50px] capitalize font-semibold">
            {name}
          </h1>
        </Link>
        <p className="mb-2 mt-4 text-[12px] md:text-[17px] capitalize ">
          {overview}
        </p>
        <div className="flex gap">
          <Rating rating={rating} color={"yellow"} />
        </div>
      </div>
      <div className="flex justify-between mt-auto  items-center px-3 py-4">
        <p className="font-semibold text-xl md:text-2xl flex-1">${price}</p>
        {!in_stock && (
          <p className="text-right mr-4 capitalize text-red-400">
            {" "}
            out of stock
          </p>
        )}
        {updatecart ? (
          <div>
            <button
              onClick={() => {
                cartItemRemove(product);
                toast.error("Item removed from cart");
              }}
              className="bg-red-600 text-white text-sm md:text-md  rounded font-semibold hover:bg-red-900 capitalize py-2 px-4"
            >
              Remove
            </button>
          </div>
        ) : (
          <div>
            <button
              onClick={() => {
                handleadd(product);
              }}
              disabled={!in_stock}
              className={`${
                !in_stock && "cursor-not-allowed"
              }  bg-blue-700 text-white text-sm md:text-md  rounded font-semibold hover:bg-blue-900 capitalize py-2 px-4`}
            >
              add to cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

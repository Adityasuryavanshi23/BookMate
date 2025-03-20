/* eslint-disable react/prop-types */
import { Link } from "react-router";
import { useCart } from "../../../context/cartContext";

export const CartCard = ({ item }) => {
  const { id, name, poster, price } = item;
  const { cartItemRemove } = useCart();
  const handleRemove = (item) => {
    cartItemRemove(item);
  };
  return (
    <div>
      <div className="flex justify-between  border-b  py-4 border-gray-500">
        <Link to={`/product/${id}`} className="">
          <img src={poster} alt={name} className="w-32" />
        </Link>
        <div className="flex-1 ml-2 ">
          <Link to={`/product/${id}`}>
            <p className="text-lg">{name}</p>
          </Link>
          <button
            className="text-red-500 capitalize hover:text-red-300"
            onClick={() => handleRemove(item)}
          >
            remove
          </button>
        </div>
        <div className="flex-1 text-right mr-2">
          <p className="text-lg">${price}</p>
        </div>
      </div>
    </div>
  );
};

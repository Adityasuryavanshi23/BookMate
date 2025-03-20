/* eslint-disable react/prop-types */
import { Link } from "react-router";

export const DashboardCard = ({ order }) => {
  return (
    <div className=" border py-6 rounded-md bg-slate-900 border-gray-500 max-w-screen-lg m-auto my-4">
      <div className="flex justify-between  px-4 py-2  ">
        <p className="capitalize text-2xl">order id: {order.id}</p>
        <p className="capitalize text-2xl">
          total: $<span className="text-green-500">{order.total}</span>
        </p>
      </div>
      {order.cartList.map((product) => (
        <div
          key={product.id}
          className="flex justify-between  px-4 py-4 border-gray-500"
        >
          <Link to={`/product/${product.id}`} className="">
            <img src={product.poster} alt={product.name} className="w-32" />
          </Link>
          <div className="flex-1 ml-2 ">
            <Link to={`/product/${product.id}`}>
              <p className="text-lg">{product.name}</p>
            </Link>
            <p className="text-lg">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

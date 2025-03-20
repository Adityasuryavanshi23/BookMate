/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useTitle } from "../../hooks/useTitle";
import { Rating } from "../../components/elements/Rating";
import { useCart } from "../../context/cartContext";
import { toast } from "react-toastify";
import { productDetail } from "../../utils";

export const ProductDetail = () => {
  const { id } = useParams();
  const nav = useNavigate();

  const [product, setproduct] = useState({});
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const data = await productDetail(id);
        setproduct(data);
      } catch (err) {
        toast.error(`!${err.status}   ${err.message}`);
      }
    };
    fetchdata();
  }, [id]);
  useTitle(product.name);

  const { cartList, cartItemRemove, addCartItem } = useCart();
  const token = sessionStorage.getItem("token");
  const handleadd = () => {
    if (!token) {
      toast.error(" Please login First to add item to cart");
      nav("/login");
    } else {
      addCartItem(product);
      toast.success("Item Added To Cart");
    }
  };

  const {
    name,
    poster,
    overview,
    long_description,
    price,
    size,
    rating,
    best_seller,
    in_stock,
  } = product;
  const updatecart = cartList.find((item) => item.id === product.id);

  return (
    <main>
      <section>
        <div
          className="flex gap-2 items-center my-4   "
          onClick={() => nav(-1)}
        >
          <i className="bi bi-arrow-left text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 text-2xl cursor-pointer "></i>
          <span className="capitalize cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 px-2 py-1 rounded-md">
            go to back
          </span>
        </div>
        <h1 className="text-center text-2xl  dark:text-white font-semibold my-2">
          {name}
        </h1>
        <p className="max-md:text-left text-center text-md text-gray-700 dark:text-gray-200 mb-4">
          {overview}
        </p>

        <div className="flex flex-col md:flex-row  justify-between   ">
          <div className="w-full md:w-[50%]">
            <img src={poster} alt={name} className="rounded-md" />
          </div>

          <div className="w-full md:w-[47%] ">
            <span className="block  text-3xl md:text-xl mb-1  max-md:mt-4   font-semibold">
              ${price}
            </span>
            <span>
              <Rating rating={rating} color={"yellow"} />
            </span>
            <div className="flex gap-2 mt-2">
              {best_seller && (
                <span className="bg-orange-100   max-md:border-gray-500 max-md:border px-3 py-1 rounded-md text-orange-500 uppercase text-lg  md:text-[14px] font-medium ">
                  Best seller
                </span>
              )}
              {in_stock ? (
                <span className="bg-green-200 max-md:border-gray-500 max-md:border   px-3 py-1 rounded-md text-green-600 uppercase text-lg  md:text-[14px] font-medium ">
                  in stock
                </span>
              ) : (
                <span className="bg-red-100 max-md:border-gray-500 max-md:border   px-3 py-1 rounded-md text-red-600 uppercase text-lg  md:text-[14px] font-medium ">
                  out of stock
                </span>
              )}

              <span className="bg-blue-200 max-md:border-gray-500 max-md:border px-3 py-1 rounded-md text-blue-600 uppercase text-lg  md:text-[14px] font-medium ">
                {size}MB
              </span>
            </div>
            {updatecart ? (
              <button
                onClick={() => {
                  cartItemRemove(product);
                  toast.error("Item Removed");
                }}
                className="text-white mt-3 bg-red-500 hover:bg-red-700  max-md:text-xl  px-4 py-2 rounded-md capitalize"
              >
                remove
              </button>
            ) : (
              <button
                onClick={handleadd}
                disabled={!in_stock}
                className={`${
                  !in_stock && "cursor-not-allowed "
                }text-white mt-3 bg-blue-700 hover:bg-blue-500  max-md:text-xl  px-4 py-2 rounded-md capitalize`}
              >
                add to cart
              </button>
            )}

            <p className="mt-3 text-[16px] font-medium">{long_description}</p>
          </div>
        </div>
      </section>
    </main>
  );
};

/* eslint-disable react/prop-types */
import { useFilter } from "../../../context/Filtercontext";

export const ProductFilter = () => {
  const { state, dispatch, setShow } = useFilter();
  return (
    <section className="w-[250px] h-full bg-white dark:bg-slate-800 z-[2] border-r border-gray-600 absolute top-0 left-0 p-2 ">
      <div className="flex justify-between items-center border-b dark:border-gray-500">
        <h1 className=" py-4 px-2 text-2xl text-black capitalize dark:text-white ">
          filter
        </h1>

        <button
          className="mr-4 hover:bg-gray-300 dark:hover:bg-gray-600  px-2 py-1 "
          type="button"
          onClick={() => setShow(false)}
        >
          <i className="bi bi-x text-2xl"></i>
        </button>
      </div>

      <h2 className="text-lg mt-2 dark:text-white ">Sort by</h2>
      <div className="">
        <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-200">
          <input
            onChange={() =>
              dispatch({ type: "SORT_BY", payload: { sort_by: "lowtohigh" } })
            }
            checked={state.sort_by === "lowtohigh"}
            type="radio"
            name="price"
            value="under500"
            className="w-4 h-4 accent-blue-500"
          />
          <span>Price - Low to High</span>
        </label>
        <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-200">
          <input
            onChange={() =>
              dispatch({ type: "SORT_BY", payload: { sort_by: "hightolow" } })
            }
            checked={state.sort_by === "hightolow"}
            type="radio"
            name="price"
            value="under1000"
            className="w-4 h-4 accent-blue-500"
          />
          <span>Price - High to Low</span>
        </label>
      </div>

      <h2 className="text-lg font mt-4 dark:text-white ">Rating</h2>
      <div className="">
        <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-200">
          <input
            onChange={() =>
              dispatch({ type: "RATING", payload: { rating: "4STARANDABOVE" } })
            }
            checked={state.rating === "4STARANDABOVE"}
            type="radio"
            className="w-4 h-4 accent-blue-500"
            name="prices"
          />
          <span>4 stars & above</span>
        </label>
        <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-200">
          <input
            onChange={() =>
              dispatch({ type: "RATING", payload: { rating: "3STARANDABOVE" } })
            }
            checked={state.rating === "3STARANDABOVE"}
            type="radio"
            className="w-4 h-4 accent-blue-500"
            name="prices"
          />
          <span>3 stars & above</span>
        </label>
        <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-200">
          <input
            onChange={() =>
              dispatch({ type: "RATING", payload: { rating: "2STARANDABOVE" } })
            }
            checked={state.rating === "2STARANDABOVE"}
            type="radio"
            className="w-4 h-4 accent-blue-500"
            name="prices"
          />
          <span>2 stars & above</span>
        </label>
        <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-200">
          <input
            onChange={() =>
              dispatch({ type: "RATING", payload: { rating: "1STARANDABOVE" } })
            }
            checked={state.rating === "1STARANDABOVE"}
            type="radio"
            className="w-4 h-4 accent-blue-500"
            name="prices"
          />
          <span>1 stars & above</span>
        </label>
      </div>

      <h2 className="text-lg  mt-4 cursor-pointe dark:text-white">
        Other Filter
      </h2>
      <div className=" ">
        <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-200">
          <input
            onChange={() =>
              dispatch({
                type: "BEST_SELLER",
                payload: { best_seller: !state.best_seller },
              })
            }
            checked={state.best_seller}
            type="checkbox"
            className="w-4 h-4"
          />
          <span>Best Seller Only</span>
        </label>
        <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-200">
          <input
            onChange={() =>
              dispatch({
                type: "IN_STOCK",
                payload: { in_stock: !state.in_stock },
              })
            }
            checked={state.in_stock}
            type="checkbox"
            className="w-4 h-4"
          />
          <span>Instock Only</span>
        </label>
      </div>
      <div className="text-center my-8">
        <button
          className="capitalize border-gray-500 hover:bg-gray-300 dark:hover:bg-gray-700 border dark:border rounded-md px-4 py-2 "
          type="button"
          onClick={() => dispatch({ type: "CLEAR_FILTER" })}
        >
          clear filter
        </button>
      </div>
    </section>
  );
};

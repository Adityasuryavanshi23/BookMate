/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { ProductsCard } from "../../components";
import { ProductFilter } from "./components/ProductFilter";
import { useTitle } from "../../hooks/useTitle";
import { useFilter } from "../../context/Filtercontext";
import { getProductList } from "../../utils";
import { toast } from "react-toastify";

export const ProductsList = () => {
  const { initialproduct, productlist, setShow, show } = useFilter();
  console.log(productlist);

  const [search] = useSearchParams();
  const queryterm = search.get("q");

  useTitle(`eBooks Collection`);

  const fetchdata = async () => {
    try {
      const data = await getProductList(queryterm);
      initialproduct(data);
    } catch (error) {
      toast.error(`!${error.status}   ${error.message}`);
    }
  };

  useEffect(() => {
    fetchdata();
  }, [queryterm]);

  return (
    <main className="z-[1]">
      {show && <ProductFilter />}
      <section>
        <div className="flex justify-between items-center">
          <h1 className="  text-xl">
            All ebooks{" "}
            <span className="text-blue-700 dark:text-blue-500 font-semibold ">
              ({productlist.length})
            </span>
          </h1>
          <button
            className="dark:hover:bg-gray-600 hover:bg-gray-300 p-2 "
            onClick={() => setShow(!show)}
          >
            <i className="bi bi-three-dots-vertical"></i>
          </button>
        </div>
        <div className="flex my-4 px-3 justify-center gap-2 items-center flex-wrap">
          {productlist.length === 0 ? (
            <>
              <h1 className="capitalize text-center text-2xl ">
                no result found for &quot;
                <span className="text-red-600">{queryterm}</span>&quot;
              </h1>
            </>
          ) : (
            productlist.map((product) => (
              <ProductsCard product={product} key={product.id} />
            ))
          )}
        </div>
      </section>
    </main>
  );
};

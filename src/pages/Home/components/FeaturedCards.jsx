import { useEffect, useState } from "react";
import { ProductsCard } from "../../../components/index";
import { featuredProducts } from "../../../utils";

export const FeaturedCards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await featuredProducts();
      setProducts(data);
      console.log(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="mt-16 md:mt-24">
      <h1 className="text-center text-xl capitalize underline decoration-2 underline-offset-8">
        featured Books
      </h1>
      <div className="flex justify-between items-center mt-8 md:mt-10 px-6 flex-wrap max-md:gap-6">
        {products.map((product) => (
          <ProductsCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

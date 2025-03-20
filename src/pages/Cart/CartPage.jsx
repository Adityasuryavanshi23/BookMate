/* eslint-disable react/prop-types */
import { useCart } from "../../context/cartContext";
import { useTitle } from "../../hooks/useTitle";
import { CartEmpty, CartList } from "./components";

export const CartPage = () => {
  const { cartList } = useCart();
  useTitle(`Cart (${cartList.length})`);
  return (
    <>
      <main>{cartList.length === 0 ? <CartEmpty /> : <CartList />}</main>
    </>
  );
};

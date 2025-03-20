/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "../reducers/CartReducer";

const initialState = {
  cartList: [],
  total: 0,
};

const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addCartItem = (product) => {
    const updatelist = [...state.cartList, product];
    const total = state.total + product.price;
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        product: updatelist,
        total: total,
      },
    });
  };

  const cartItemRemove = (product) => {
    const updatelist = state.cartList.filter((item) => item.id !== product.id);
    const total = state.total - product.price;

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        RemoveProduct: updatelist,
        total: total,
      },
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };
  const value = {
    cartList: state.cartList,
    total: state.total,
    cartItemRemove,
    addCartItem,
    clearCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};

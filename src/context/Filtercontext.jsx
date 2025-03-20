/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer, useState } from "react";
import { filterReducer } from "../reducers/Filterreducer";

const initialState = {
  productlist: [],
  sort_by: null,
  rating: null,
  best_seller: false,
  in_Stock: false,
};

const Filtercontext = createContext(initialState);

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);
  const [show, setShow] = useState(false);

  const initialproduct = (product) => {
    dispatch({
      type: "PRODUCTLIST",
      payload: {
        product: product,
      },
    });
  };

  const sort_by = (product) => {
    if (state.sort_by === "lowtohigh") {
      return product.sort((a, b) => a.price - b.price);
    }
    if (state.sort_by === "hightolow") {
      return product.sort((a, b) => b.price - a.price);
    }
    return product;
  };

  const best_seller = (product) => {
    return state.best_seller
      ? product.filter((product) => product.best_seller === true)
      : product;
  };

  const in_Stock = (product) => {
    return state.in_stock
      ? product.filter((product) => product.in_stock === true)
      : product;
  };

  const rating = (product) => {
    if (state.rating === "4STARANDABOVE") {
      return product.filter((product) => product.rating >= 4);
    }
    if (state.rating === "3STARANDABOVE") {
      return product.filter((product) => product.rating >= 3);
    }
    if (state.rating === "2STARANDABOVE") {
      return product.filter((product) => product.rating >= 2);
    }
    if (state.rating === "1STARANDABOVE") {
      return product.filter((product) => product.rating >= 1);
    }
    return product;
  };

  const filteredproduct = rating(
    sort_by(in_Stock(best_seller(state.productlist)))
  );

  const value = {
    productlist: filteredproduct,
    initialproduct,
    state,
    dispatch,
    setShow,
    show,
  };
  return (
    <Filtercontext.Provider value={value}>{children}</Filtercontext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(Filtercontext);
  return context;
};

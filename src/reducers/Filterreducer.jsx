export const filterReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "PRODUCTLIST":
      return { productlist: payload.product };
    case "SORT_BY":
      return { ...state, sort_by: payload.sort_by };
    case "RATING":
      return { ...state, rating: payload.rating };
    case "BEST_SELLER":
      return { ...state, best_seller: payload.best_seller };
    case "IN_STOCK":
      return { ...state, in_stock: payload.in_stock };
    case "CLEAR_FILTER":
      return {
        ...state,
        sort_by: null,
        rating: null,
        best_seller: false,
        in_stock: false,
      };
    default:
      throw new Error(`No case for type ${type} found in filterreducer.`);
  }
};

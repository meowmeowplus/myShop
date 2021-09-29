import {
    CREATE_PRODUCT,
    RETRIEVE_PRODUCTS,
    UPDATE_PRODUCT,
    GET_TOP,
    GET_REVENUE,
    BUY,
  } from "../actions/type";
  
  const initialState = [];
  
  function productReducer(products = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_PRODUCT:
        return [...products, payload];
  
      case RETRIEVE_PRODUCTS:
        return payload;
  
      case UPDATE_PRODUCT:
        return products.map((product) => {
          if (product.id === payload.id) {
            return {
              ...product,
              ...payload,
            };
          } else {
            return product;
          }
        });
      
      case GET_TOP:
        return payload;

      case GET_REVENUE:
        // console.log("payload: " + JSON.stringify(payload));
        return payload;
      
      case BUY:
        return [];

      default:
        return products;
    }
  };
  
  export default productReducer;
  
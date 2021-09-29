import {
    CREATE_PRODUCT,
    RETRIEVE_PRODUCTS,
    UPDATE_PRODUCT,
    GET_TOP,
    GET_REVENUE,
    BUY,
  } from "./type";
  
  import ProductDataService from "../services/product.service";
  
  
  export const createProduct = (title, price, description, category, image) => async (dispatch) => {
    try {
      const res = await ProductDataService.create({ title, price, description, category, image });
  
      dispatch({
        type: CREATE_PRODUCT,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  

  export const retrieveProducts = () => async (dispatch) => {
    try {
      const res = await ProductDataService.getAll();
  
      dispatch({
        type: RETRIEVE_PRODUCTS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  

  export const updateProduct = (id, data) => async (dispatch) => {
    try {
      const res = await ProductDataService.update(id, data);
  
      dispatch({
        type: UPDATE_PRODUCT,
        payload: data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  

  export const getTopProducts = () => async (dispatch) => {
    try {
      const res = await ProductDataService.getTop();
  
      dispatch({
        type: GET_TOP,
        payload: res.data,
      });
      // console.log("top: " + JSON.stringify(res.data));
    } catch (err) {
      console.log(err);
    }
  };


  export const getAllRevenue = () => async (dispatch) => {
    try {
      const res = await ProductDataService.getRevenue();
  
      dispatch({
        type: GET_REVENUE,
        payload: res.data,
      });
      // console.log("reve: " + JSON.stringify(res.data));
    } catch (err) {
      console.log(err);
    }
  };
  
  export const buyProductById = (id) => async (dispatch) => {
    try {
      const res = await ProductDataService.buy(id);
  
      dispatch({
        type: BUY,
        payload: id,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
import {
  START_FETCHING_PRODUCTS,
  FETCHING_PRODUCTS_SUCCESS,
  SET_PRODUCTS,
  CREATE_PRODUCT,
} from "../actiontypes/index";
import axios from "axios";

const URL = `http://localhost:3001/api/v1`;

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    products,
  };
};

const startFetchingProducts = () => {
  return {
    type: START_FETCHING_PRODUCTS,
  };
};

const completedFetchingProducts = () => {
  return {
    type: FETCHING_PRODUCTS_SUCCESS,
  };
};

export const createProduct = (product) => {
  return {
    type: CREATE_PRODUCT,
    product,
  };
};

export const getAllProducts = () => {
  return (dispatch) => {
    dispatch(startFetchingProducts());
    axios
      .get(`${URL}/products`, {
        headers: headers,
      })
      .then((products) => {
        dispatch(setProducts(products.data));
        dispatch(completedFetchingProducts());
      })
      .catch((error) => console.log(error));
  };
};

export const newProduct = (
  name,
  description,
  price,
  quantity,
  time_to_make,
  image,
  type_id,
  requestHeaders,
  user_id
) => {
  return (dispatch) => {
    axios(`${URL}/users/${user_id}/products`, {
      method: "POST",
      headers: requestHeaders,
      data: {
        product: {
          name,
          description,
          price,
          quantity,
          time_to_make,
          image,
          type_id,
        },
      },
    })
      .then((product) => {
        console.log(product.data.product);
        dispatch(createProduct(product.data.product));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

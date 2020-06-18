import Toastr from "../services/Toastr";
import axios from "axios";
import {
  START_FETCHING_PRODUCTS,
  FETCHING_PRODUCTS_SUCCESS,
  SET_PRODUCTS,
  CREATE_PRODUCT,
  START_PRODUCT_UPDATE,
  UPDATE_PRODUCT_SUCCESS,
  SET_CATEGORY,
  SET_MIN_PRICE,
  SET_MAX_PRICE,
  SET_KEYWORD,
} from "../actiontypes/index";

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

const setCategory = (type) => {
  return {
    type: SET_CATEGORY,
    payload: { category: type },
  };
};

const setMinPrice = (price) => {
  return {
    type: SET_MIN_PRICE,
    payload: { min_price: price },
  };
};

const setMaxPrice = (price) => {
  return {
    type: SET_MAX_PRICE,
    payload: { max_price: price },
  };
};

const setKeyword = (keyword) => {
  return {
    type: SET_KEYWORD,
    payload: { keyword: keyword },
  };
};
export const createProduct = (product) => {
  return {
    type: CREATE_PRODUCT,
    product,
  };
};

export const startUpdateProduct = () => {
  return {
    type: START_PRODUCT_UPDATE,
  };
};

export const updatedCompleted = (id, data) => {
  return {
    type: UPDATE_PRODUCT_SUCCESS,
    payload: { id, data },
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

export const getProductsByCategory = (type) => {
  return (dispatch) => {
    dispatch(startFetchingProducts());
    axios
      .get(`${URL}/products/?type=${type}`, {
        headers: headers,
      })
      .then((products) => {
        dispatch(setCategory(type));
        dispatch(setProducts(products.data));
        dispatch(completedFetchingProducts());
      })
      .catch((error) => console.log(error));
  };
};

export const getProductsByMinPrice = (price) => {
  return (dispatch) => {
    dispatch(startFetchingProducts());
    axios
      .get(`${URL}/products/?min_price=${price}`, {
        headers: headers,
      })
      .then((products) => {
        dispatch(setMinPrice(price));
        dispatch(setProducts(products.data));
        dispatch(completedFetchingProducts());
      })
      .catch((error) => console.log(error));
  };
};

export const getProductsByMaxPrice = (price) => {
  return (dispatch) => {
    dispatch(startFetchingProducts());
    axios
      .get(`${URL}/products/?max_price=${price}`, {
        headers: headers,
      })
      .then((products) => {
        dispatch(setMaxPrice(price));
        dispatch(setProducts(products.data));
        dispatch(completedFetchingProducts());
      })
      .catch((error) => console.log(error));
  };
};

export const getProductsByKeyword = (keyword) => {
  return (dispatch) => {
    dispatch(startFetchingProducts());
    axios
      .get(`${URL}/products/?keyword=${keyword}`, {
        headers: headers,
      })
      .then((products) => {
        dispatch(setKeyword(keyword));
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
        if (product.status === 201) {
          Toastr.toast.successToast("✅ Product Created successfully");
          dispatch(createProduct(product.data.product));
        } else {
          Toastr.toast.errorToast("🛑 An error occur");
        }
      })
      .catch((error) => {
        Toastr.toast.errorToast("🛑 An error occur");
        console.log(error);
      });
  };
};

export const updateProduct = (
  name,
  description,
  price,
  quantity,
  time_to_make,
  image,
  type_id,
  user_id,
  product_id,
  requestHeaders,
  history
) => {
  return (dispatch) => {
    dispatch(startUpdateProduct());
    axios(`${URL}/users/${user_id}/products/${product_id}`, {
      method: "PATCH",
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
      .then((updatedProduct) => {
        if (updatedProduct.status === 200) {
          dispatch(updatedCompleted(product_id, updatedProduct.data));
          Toastr.toast.successToast("✅ Product updated successfully");
          history.push({
            pathname: `/products/${product_id}`,
            state: {
              product: updatedProduct.data,
            },
          });
        } else {
          Toastr.toast.errorToast("🛑 An error occur, chek your data");
        }
      })
      .catch((err) => console.log(err));
  };
};

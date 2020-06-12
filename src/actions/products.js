import Toastr from "../services/Toastr";
import axios from "axios";
import {
  START_FETCHING_PRODUCTS,
  FETCHING_PRODUCTS_SUCCESS,
  SET_PRODUCTS,
  CREATE_PRODUCT,
  START_PRODUCT_UPDATE,
  UPDATE_PRODUCT_SUCCESS,
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
        dispatch(createProduct(product.data.product));
      })
      .catch((error) => {
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
    }).then((updatedProduct) => {
      if (updatedProduct.status === 200) {
        dispatch(updatedCompleted(product_id, updatedProduct.data));
        Toastr.toast.successToast("Product updated successfully");
        history.push({
          pathname: `/products/${product_id}`,
          state: {
            product: updatedProduct.data,
          },
        });
      } else {
        Toastr.toast.errorToast("An error occur, chek your data");
      }
    });
  };
};

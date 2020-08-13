import { ProductTypes } from "./ProductTyes";
import Toastr from "../../services/Toastr";
import axios from "axios";

const URL = `http://localhost:3001/api/v1`;
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const setProducts = (products) => ({
  type: ProductTypes.SET_PRODUCTS,
  products,
});

export const setProduct = (product) => ({
  type: ProductTypes.FETCH_PRODUCT_BY_ID,
  payload: product,
});
export const startFetchingProducts = () => ({
  type: ProductTypes.START_FETCHING_PRODUCTS,
});

export const completedFetchingProducts = () => ({
  type: ProductTypes.FETCHING_PRODUCTS_SUCCESS,
});

export const setCategory = (type) => ({
  type: ProductTypes.SET_CATEGORY,
  payload: { category: type },
});

export const setMinPrice = (price) => ({
  type: ProductTypes.SET_MIN_PRICE,
  payload: { min_price: price },
});

export const setMaxPrice = (price) => ({
  type: ProductTypes.SET_MAX_PRICE,
  payload: { max_price: price },
});

export const setKeyword = (keyword) => ({
  type: ProductTypes.SET_KEYWORD,
  payload: { keyword: keyword },
});

const createProduct = (product) => ({
  type: ProductTypes.CREATE_PRODUCT,
  product,
});

export const startUpdateProduct = () => ({
  type: ProductTypes.START_PRODUCT_UPDATE,
});

export const updatedCompleted = (id, data) => ({
  type: ProductTypes.UPDATE_PRODUCT_SUCCESS,
  payload: { id, data },
});

export const fetchAllProducts = () => async (dispatch) => {
  dispatch(startFetchingProducts());

  const products = await axios.get(`${URL}/products`, {
    headers: headers,
  });
  localStorage.setItem("products", JSON.stringify(products.data));
  dispatch(setProducts(products.data));
  dispatch(completedFetchingProducts());
};

export const fetchProductById = (id) => async (dispatch) => {
  dispatch(startFetchingProducts());

  try {
    const product = await axios.get(`${URL}/products/${id}`, {
      headers: headers,
    });
    localStorage.setItem("product", JSON.stringify(product.data));
    dispatch(setProduct(product.data));
    dispatch(completedFetchingProducts());
  } catch (e) {
    Toastr.toast.errorToast("🛑", e.message);
  }
};

export const getProductsByCategory = (type) => async (dispatch) => {
  dispatch(startFetchingProducts());
  dispatch(setCategory(type));

  const products = await axios.get(`${URL}/products/?type=${type}`, {
    headers: headers,
  });
  dispatch(setProducts(products.data));
  dispatch(completedFetchingProducts());
};

export const getProductsByMinPrice = (price) => async (dispatch) => {
  dispatch(startFetchingProducts());
  dispatch(setMinPrice(price));

  const products = await axios.get(`${URL}/products/?min_price=${price}`, {
    headers: headers,
  });
  dispatch(setProducts(products.data));
  dispatch(completedFetchingProducts());
};

export const getProductsByMaxPrice = (price) => async (dispatch) => {
  dispatch(startFetchingProducts());
  dispatch(setMaxPrice(price));

  const products = await axios.get(`${URL}/products/?max_price=${price}`, {
    headers: headers,
  });
  dispatch(setProducts(products.data));
  dispatch(completedFetchingProducts());
};

export const getProductsByKeyword = (keyword) => async (dispatch) => {
  dispatch(startFetchingProducts());
  dispatch(setKeyword(keyword));

  const products = await axios.get(`${URL}/products/?keyword=${keyword}`, {
    headers: headers,
  });
  dispatch(setProducts(products.data));
  dispatch(completedFetchingProducts());
};

export const productCreation = (values, requestedHeaders, user_id) => async (
  dispatch
) => {
  try {
    const { data } = await axios.post(
      `${URL}/users/${user_id}/products`,
      values,
      {
        headers: requestedHeaders,
      }
    );
    dispatch(createProduct(data.product));
    Toastr.toast.successToast("✅ Product Created successfully");
  } catch (e) {
    Toastr.toast.errorToast("🛑", e.message);
  }
};

export const productUpdate = (
  values,
  requestedHeaders,
  user_id,
  product_id,
  history
) => async (dispatch) => {
  try {
    const { data } = await axios.patch(
      `${URL}/users/${user_id}/products/${product_id}`,
      values,
      {
        headers: requestedHeaders,
      }
    );
    dispatch(updatedCompleted(data.id, data));
    history.push({
      pathname: `/products/${product_id}`,
      state: {
        product: data.product,
      },
    });
  } catch (e) {
    Toastr.toast.errorToast("🛑", e.message);
  }
};

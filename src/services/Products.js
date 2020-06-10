const URL = `http://localhost:3001/api/v1`;
let token = localStorage.getItem("jwt");

const myHeaders = new Headers();

myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", token);

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const adminHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: localStorage.getItem("jwt"),
};

const getAllProducts = () => {
  return fetch(`${URL}/products`, {
    headers: headers,
  }).then((resp) => resp.json());
};

const createProduct = (
  name,
  description,
  price,
  quantity,
  time_to_make,
  image,
  type_id,
  requestHeaders
) => {
  return fetch(`${URL}/users/6/products`, {
    method: "POST",
    headers: requestHeaders,
    body: JSON.stringify({
      product: {
        name,
        description,
        price,
        quantity,
        time_to_make,
        image,
        type_id,
      },
    }),
  }).then((resp) => resp.json());
};

const updateProduct = (
  name,
  description,
  price,
  quantity,
  time_to_make,
  image,
  type_id,
  user_id,
  product_id,
  requestHeaders
) => {
  return fetch(`${URL}/users/${user_id}/products/${product_id}`, {
    method: "PATCH",
    headers: requestHeaders,
    body: JSON.stringify({
      product: {
        name,
        description,
        price,
        quantity,
        time_to_make,
        image,
        type_id,
      },
    }),
  }).then((resp) => resp.json());
};
export default {
  products: { getAllProducts, createProduct, updateProduct },
};

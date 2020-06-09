const URL = `http://localhost:3001/api/v1`;
let token = localStorage.getItem("jwt");

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const adminHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: token,
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
  type_id
) => {
  return fetch(`${URL}/users/6/products`, {
    method: "POST",
    headers: adminHeaders,
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
  products: { getAllProducts, createProduct },
};

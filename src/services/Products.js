const URL = `http://localhost:3001/api/v1`;
let token = localStorage.getItem("jwt");

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const getAllProducts = () => {
  return fetch(`${URL}/products`, {
    headers: headers,
  }).then((resp) => resp.json());
};

export default {
  products: { getAllProducts },
};

import axios from "axios";
const URL = `http://localhost:3001/api/v1`;
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};
const getTypes = () => {
  return fetch(`${URL}/types`, {
    method: "GET",
    headers: headers,
  }).then((resp) => resp.json());
};

const categories = async () => {
  try {
    const categories = await axios.get(`${URL}/types`);
    return categories.data;
  } catch (e) {
    console.log(e);
  }
};

export default {
  types: {
    getTypes,
    categories,
  },
};

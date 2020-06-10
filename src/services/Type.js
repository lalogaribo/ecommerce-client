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

export default {
  types: {
    getTypes,
  },
};

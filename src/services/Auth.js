const URL = `http://localhost:3001/api/v1`;
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};
const login = (email, password) => {
  return fetch(`${URL}/login`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      user: {
        email,
        password,
      },
    }),
  }).then((resp) => resp.json());
};

const signup = (
  first_name,
  last_name,
  email,
  password,
  password_confirmation
) => {
  return fetch(`${URL}/signup`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      user: {
        first_name,
        last_name,
        email,
        password,
        password_confirmation,
      },
    }),
  }).then((resp) => resp.json());
};

export default {
  auth: {
    login,
    signup,
  },
};

import { FETCH_USER } from "./index";
import axios from "axios";

const fetchUser = (user) => {
  return {
    type: FETCH_RENTALS_SUCCESS,
    user,
  };
};

export const makeLoginRequest = (email, password) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3001/api/v1/login", {
        email,
        password,
      })
      .then((res) => res.data)
      .then((user) => dispatch(fetchUser(user)))
      .catch((error) => console.log(error));
  };
};

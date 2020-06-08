import { SET_USER_DATA } from "../actiontypes/index";
import axios from "axios";

const fetchUser = (user) => {
  return {
    type: SET_USER_DATA,
    user,
  };
};

export const signIn = (email, password, history) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3001/api/v1/login", {
        user: {
          email,
          password,
        },
      })
      .then((res) => res.data)
      .then((user) => {
        console.log(user.data);
        dispatch(fetchUser(user.data.user));
        history.push("/");
      })
      .catch((error) => console.log(error));
  };
};

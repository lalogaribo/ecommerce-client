import { UserTypes } from "./UserTypes";
import axios from "axios";

export const setCurrentUser = (user) => ({
  type: UserTypes.SET_CURRENT_USER,
  payload: user,
});

export const logOutUser = () => ({
  type: UserTypes.LOGOUT_USER,
});

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
        localStorage.setItem("jwt", user.data.token);
        dispatch(setCurrentUser(user.data.user));
        history.push("/");
      })
      .catch((error) => console.log(error));
  };
};

export const signUp = (
  first_name,
  last_name,
  email,
  password,
  password_confirmation,
  history
) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3001/api/v1/signup", {
        user: {
          first_name,
          last_name,
          email,
          password,
          password_confirmation,
        },
      })
      .then((res) => res.data)
      .then((user) => {
        localStorage.setItem("jwt", user.data.token);
        dispatch(setCurrentUser(user.data.user));
        history.push("/");
      })
      .catch((error) => console.log(error));
  };
};

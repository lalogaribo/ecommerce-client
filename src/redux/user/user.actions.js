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
  return async (dispatch) => {
    try {
      const { data } = await axios.post("http://localhost:3001/api/v1/login", {
        user: {
          email,
          password,
        },
      });
      console.log(data.data.token);
      localStorage.setItem("jwt", data.data.token);
      dispatch(setCurrentUser(data.data.user));
      history.replace("/");
    } catch (e) {
      console.log(e);
    }
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
  return async (dispatch) => {
    try {
      const { data } = await axios.post("http://localhost:3001/api/v1/signup", {
        user: {
          first_name,
          last_name,
          email,
          password,
          password_confirmation,
        },
      });
      localStorage.setItem("jwt", data.data.token);
      dispatch(setCurrentUser(data.data.user));
      history.replace("/");
    } catch (e) {
      console.log(e);
    }
  };
};

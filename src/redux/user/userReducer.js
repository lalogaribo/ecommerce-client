import { UserTypes } from "./UserTypes";

const initialState = {
  isLoggedIn: null,
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserTypes.SET_CURRENT_USER:
      return { ...state, user: action.payload, isLoggedIn: true };
    case UserTypes.LOGOUT_USER:
      return { state: undefined};
    default:
      return state;
  }
};

export default userReducer;

import { SET_USER_DATA } from "../actiontypes";

const initialState = {
  isLoggedIn: false,
  user: {},
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, user: action.user, isLoggedIn: true };
  }
  return state;
}

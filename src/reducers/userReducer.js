import { FETCH_USER } from "../actiontypes";
export const initialState = {
  isLoggedIn: false,
  userId: "",
  token: "",
  refreshToken: "",
  expiresOn: "",
  user: {},
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, user: action.user, isLoggedIn: true };
  }
  return state;
}

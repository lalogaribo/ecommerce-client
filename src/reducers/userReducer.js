import { FETCH_USER } from "../actiontypes";
let initialState = {
  date: new Date().toISOString().slice(0, 10),
  user: {},
};

export function userReducer(state = initialState, action) {
  // switch (action.type) {
  //   case FETCH_USER:
  //     return { ...state, user: payload.user };
  // }
  return state;
}

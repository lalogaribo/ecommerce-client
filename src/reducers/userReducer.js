let initialState = {
  date: new Date().toISOString().slice(0, 10),
};

export function userReducer(state = initialState, action) {
  console.log("calling state");
  return state;
}

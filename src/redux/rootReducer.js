import { DECREMENT, INCREMENT } from "./actionTypes";

export const rootReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return ++state;
    case DECREMENT:
      return --state;
    default:
      return state;
  }
};

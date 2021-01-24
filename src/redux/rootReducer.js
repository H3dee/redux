import { combineReducers } from "redux";
import {
  CHANGE_THEME,
  DECREMENT,
  DISABLE_BUTTONS,
  ENABLE_BUTTONS,
  INCREMENT,
} from "./actionTypes";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return ++state;
    case DECREMENT:
      return --state;
    default:
      return state;
  }
};

const initialThemeState = {
  value: "light",
  isDisabled: false,
};

const themeReducer = (state = initialThemeState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        value: action.payload,
      };
    case DISABLE_BUTTONS:
      return {
        ...state,
        isDisabled: true,
      };
    case ENABLE_BUTTONS:
      return {
        ...state,
        isDisabled: false,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});

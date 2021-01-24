import {
  INCREMENT,
  DECREMENT,
  CHANGE_THEME,
  DISABLE_BUTTONS,
  ENABLE_BUTTONS,
} from "./actionTypes";

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const changeTheme = (newTheme) => ({
  type: CHANGE_THEME,
  payload: newTheme,
});
const disableButtons = () => ({
  type: DISABLE_BUTTONS,
});
const enableButtons = () => ({
  type: ENABLE_BUTTONS,
});
export const asyncIncrement = () => (dispatch) => {
  dispatch(disableButtons());
  setTimeout(() => {
    dispatch(increment());
    dispatch(enableButtons());
  }, 1500);
};

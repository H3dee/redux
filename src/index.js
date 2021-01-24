import {
  asyncIncrement,
  changeTheme,
  decrement,
  increment,
} from "./redux/actions";
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./redux/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import "./styles.css";

const counter = document.querySelector("#counter");
const addBtn = document.querySelector("#add");
const subBtn = document.querySelector("#sub");
const asyncBtn = document.querySelector("#async");
const toggleThemeBtn = document.querySelector("#theme");

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

addBtn.addEventListener("click", () => {
  store.dispatch(increment());
});

subBtn.addEventListener("click", () => {
  store.dispatch(decrement());
});

asyncBtn.addEventListener("click", () => {
  store.dispatch(asyncIncrement());
});

toggleThemeBtn.addEventListener("click", () => {
  const newTheme = document.body.classList.contains("light") ? "dark" : "light";
  store.dispatch(changeTheme(newTheme));
});

store.subscribe(() => {
  const state = store.getState();

  counter.textContent = state.counter;
  document.body["className"] = state.theme.value;

  [addBtn, subBtn, asyncBtn, toggleThemeBtn].forEach(
    (btn) => (btn["disabled"] = state.theme.isDisabled)
  );
});

store.dispatch({ type: "__INIT__" });

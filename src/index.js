import { asyncIncrement, decrement, increment } from "./redux/actions";
import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from "./redux/rootReducer";
import thunk from "redux-thunk";
import "./styles.css";

const counter = document.querySelector("#counter");
const addBtn = document.querySelector("#add");
const subBtn = document.querySelector("#sub");
const asyncBtn = document.querySelector("#async");
const toggleThemeBtn = document.querySelector("#theme");

const store = createStore(rootReducer, 0, applyMiddleware(thunk));

addBtn.addEventListener("click", () => {
  store.dispatch(increment());
});

subBtn.addEventListener("click", () => {
  store.dispatch(decrement());
});

asyncBtn.addEventListener("click", () => {
      store.dispatch(asyncIncrement())
});

toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

store.subscribe(() => {
  const state = store.getState();
  counter.textContent = state.toString();
});

store.dispatch({ type: "__INIT__" });

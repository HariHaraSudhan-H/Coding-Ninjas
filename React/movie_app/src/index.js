import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import "./index.css";
import AppWrapper from "./components/App";
import combineReducers from "./reducers";

// const logger = function({dispatch,getState}){
//   return function (next){
//     return function (action){
//       console.log('ACTION_TYPE',action.type);
//       next(action);
//     }
//   }
// }

// this function is currying form of function (obj,next,action)
const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action !== "function") {
      console.log("ACTION_TYPE", action.type);
    }
    next(action);
  };

// const thunk =
//   ({ dispatch, getState }) =>
//   (next) =>
//   (action) => {
//     console.log(typeof action);
//     if (typeof action === "function") {
//       console.log(typeof action);

//       action(dispatch);
//       return;
//     }
//     next(action);
//   };

const store = createStore(combineReducers, applyMiddleware(logger, thunk));
console.log("store", store);

export const StoreContext = createContext();

class StoreProvider extends React.Component {
  render() {
    const {store,children} = this.props;
    return (
      <StoreContext.Provider value={store}>
        {children}
      </StoreContext.Provider>
    );
  }
}
// console.log('before STATE',store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies:[{name: 'Superman'}]
// })
// console.log('after STATE',store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <AppWrapper store={store} />
    </StoreProvider>
  </React.StrictMode>
);

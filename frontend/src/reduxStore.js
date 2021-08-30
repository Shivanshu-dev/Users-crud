import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userReducer } from "./reducers/usersReducer";

export const store = createStore(
  combineReducers({
    users: userReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

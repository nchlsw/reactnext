import auth_reducer from "./auth";
import { combineReducers } from "redux";

export default combineReducers({
  auth: auth_reducer,
});

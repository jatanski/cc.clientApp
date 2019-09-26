import { combineReducers } from "redux";
import testReducer from "./test";
import loginReducer from "./login";

const rootReducer = combineReducers({
  test: testReducer,
  login: loginReducer
});

export default rootReducer;

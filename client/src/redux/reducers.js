import { combineReducers } from "redux";
import testReducer from "./test";
import loginReducer from "./login";
import messagesReducer from './message';

const rootReducer = combineReducers({
  test: testReducer,
  login: loginReducer,
  messages: messagesReducer
});

export default rootReducer;

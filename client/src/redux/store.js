import { createStore, bindActionCreators, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { testActions } from "./test";
import { loginActions } from "./login";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const allActions = bindActionCreators(
  {
    addTest: testActions.addTest,
    subtractTest: testActions.removeTest,
    logIn: loginActions.login,
    logOut: loginActions.logout
  },
  store.dispatch
);

window.store = store;

export { store, allActions };

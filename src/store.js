import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";
import index from "./reducers";
import rootReducer from "./reducers/index";

export const store = createStore(rootReducer, composeWithDevTools());

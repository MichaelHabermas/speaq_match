import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profileReducer";

import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({ matchAndMemory: profileReducer });

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;

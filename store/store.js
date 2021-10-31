import { createStore, combineReducers, applyMiddleware } from "redux";
import MandMReducer from "./MandMReducer";

import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({ matchAndMemory: MandMReducer });

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;

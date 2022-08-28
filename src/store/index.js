import {combineReducers, createStore} from "redux";
import {assetsReducer} from "./assetsReducer";
import {exchangeReducer} from "./exchangeReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    assets: assetsReducer,
    exchange: exchangeReducer
})

export const store = createStore(rootReducer, composeWithDevTools());
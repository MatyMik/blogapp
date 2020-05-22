import {combineReducers, createStore, applyMiddleware} from "redux"
import authReducer from "./reducers/authReducer";
import thunk from "redux-thunk"

const store = combineReducers({
    auth:authReducer
});

const rootStore = createStore(store, applyMiddleware(thunk))
export default rootStore;
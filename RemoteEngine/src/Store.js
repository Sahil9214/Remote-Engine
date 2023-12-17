import { legacy_createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { reducer as developerReducer } from "./Redux/reducer";
const store = legacy_createStore(developerReducer, applyMiddleware(thunk));
export default store;

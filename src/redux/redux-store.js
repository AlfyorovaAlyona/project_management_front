import {applyMiddleware, combineReducers, createStore} from "redux";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import projectsReducer from "./projectReducer";

let reducers = combineReducers({
    projectsPage: projectsReducer
});

const middleware = applyMiddleware(promise, thunk);
export let store = createStore(reducers, middleware);

export default store;
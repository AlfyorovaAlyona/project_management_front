import {applyMiddleware, combineReducers, createStore} from "redux";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import projectsReducer from "./projectReducer";
import tasksReducer from "./tasksReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
    projectsPage: projectsReducer,
    tasksPage: tasksReducer,
    profilePage: profileReducer
});

const middleware = applyMiddleware(promise, thunk);
export let store = createStore(reducers, middleware);

export default store;
import axios from "axios";

const SET_MUST_FETCH_PROJECTS = 'SET_MUST_FETCH_PROJECTS';
const FETCH_PROJECTS = "FETCH_PROJECTS";
const FETCH_PROJECTS_PENDING = "FETCH_PROJECTS_PENDING";
const FETCH_PROJECTS_REJECTED = "FETCH_PROJECTS_REJECTED";
const FETCH_PROJECTS_FULFILLED = "FETCH_PROJECTS_FULFILLED";


let initialState = {
    //todo hack
    mustFetch: true,

    fetching: false,
    fetched: false,
    error: null,

    projects: []
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
      case SET_MUST_FETCH_PROJECTS:
          return {
              ...state,
              mustFetch: action.newValue
          };

      case FETCH_PROJECTS_PENDING:
          return {
              ...state,
              fetching: false,
              error: null
          };

      case FETCH_PROJECTS_REJECTED:
          return {
              ...state,
              fetching: false,
              error: action.error
          };

      case FETCH_PROJECTS_FULFILLED:
          return {
              ...state,
              fetching: false,
              fetched: true,
              projects: action.payload.data
          };

      default:
          return state;
  }  
};


//Action Creators
export const setMustFetchProjectsCreator = (newValue) => {
    return {
        type: SET_MUST_FETCH_PROJECTS,
        newValue: newValue
    }
};

export const fetchProjectsCreator = () => {
    return {
        type: FETCH_PROJECTS,
        payload: axios.get("http://localhost:8080/projects")
    }
};



export default projectsReducer;

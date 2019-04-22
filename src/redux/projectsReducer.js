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
          let projectDtos = prepareProjectsToDisplay(action.payload.data);
          return {
              ...state,
              fetching: false,
              fetched: true,
              projects: projectDtos
          };

      default:
          return state;
  }  
};

const prepareProjectsToDisplay = (projectDtos) => {
    projectDtos.forEach(o => {
        o.deadline = new Date(o.deadline.substring(0, o.deadline.indexOf('Z') + 1));
    });
    projectDtos.forEach(o => {
        if (o.tasks != null) {
            o.tasks.forEach(o => {
                o.deadline = new Date(o.deadline.substring(0, o.deadline.indexOf('Z') + 1));
            })
        }
    });

    return projectDtos;
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

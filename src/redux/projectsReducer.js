import axios from "axios";

const SET_MUST_FETCH_PROJECTS = 'SET_MUST_FETCH_PROJECTS';
const FETCH_PROJECTS = "FETCH_PROJECTS";
const FETCH_PROJECTS_PENDING = "FETCH_PROJECTS_PENDING";
const FETCH_PROJECTS_REJECTED = "FETCH_PROJECTS_REJECTED";
const FETCH_PROJECTS_FULFILLED = "FETCH_PROJECTS_FULFILLED";
/*
let initialState = {
    projects: [
        {
            id: 1,
            creatorId: 1,
            name: "work",
            status: 0,
            description: "do",
            deadline: "2019-03-31 23:00:43.573000",
            tasks: [
                {
                    id: 1,
                    name: "good",
                    salary: 10,
                    status: 0,
                    projectId: 1,
                    deadline: "2019-04-31 23:00:43.573000",
                    description: "do something"
                },
                {
                    id: 2,
                    name: "bad",
                    salary: 100,
                    status: 0,
                    projectId: 1,
                    deadline: "2019-04-31 23:00:43.573000",
                    description: "do nothing"
                },
                {
                    id: 3,
                    name: "bad",
                    salary: 100,
                    status: 0,
                    projectId: 1,
                    deadline: "2019-04-31 23:00:43.573000",
                    description: "do nothing"
                }
            ]
        },

        {
            id: 2,
            creatorId: 2,
            name: "work",
            status: 1,
            description: "do",
            deadline: "2019-03-31 23:00:43.573000",
            tasks: [
                {

                    id: 4,
                    name: "new",
                    salary: 1000,
                    status: 0,
                    projectId: 1,
                    deadline: "2019-04-31 23:00:43.573000",
                    description: "do nothing"
                }
            ]

        }
]
};*/

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

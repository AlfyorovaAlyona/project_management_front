import axios from "axios";

const DELETE_FINISHED_PROJECT = 'DELETE_FINISHED_PROJECT';

const SET_MUST_FETCH_MY_PROJECTS = "SET_MUST_FETCH_MY_PROJECTS";
const FETCH_MY_PROJECTS = "FETCH_MY_PROJECTS";
const FETCH_MY_PROJECTS_PENDING = "FETCH_MY_PROJECTS_PENDING";
const FETCH_MY_PROJECTS_REJECTED = "FETCH_MY_PROJECTS_REJECTED";
const FETCH_MY_PROJECTS_FULFILLED = "FETCH_MY_PROJECTS_FULFILLED";

const SET_MUST_FETCH_MY_TASKS = "SET_MUST_FETCH_MY_TASKS";
const FETCH_MY_TASKS = "FETCH_MY_TASKS";
const FETCH_MY_TASKS_PENDING = "FETCH_MY_TASKS_PENDING";
const FETCH_MY_TASKS_REJECTED = "FETCH_MY_TASKS_REJECTED";
const FETCH_MY_TASKS_FULFILLED = "FETCH_MY_TASKS_FULFILLED";


let initialState = {
    //todo hack
    mustFetchTasks: true,
    mustFetchProjects: true,

    userId: null,
    fetching: false,
    fetched: false,
    error: null,

    name: null,
    surname: null,
    email: null,

    projects: [],
    tasks: []
};


const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_MUST_FETCH_MY_PROJECTS:
            return {
                ...state,
                mustFetchProjects: action.newValue
            };
        case SET_MUST_FETCH_MY_TASKS:
            return {
                ...state,
                mustFetchTasks: action.newValue
            };
        case FETCH_MY_PROJECTS_PENDING:
            return {
                ...state,
                fetching: false,
                error: null
            };

        case FETCH_MY_PROJECTS_REJECTED:
            return {
                ...state,
                fetching: false,
                error: action.error
            };

        case FETCH_MY_PROJECTS_FULFILLED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                projects: action.payload.data
            };

        case FETCH_MY_TASKS_PENDING:
            return {
                ...state,
                fetching: false,
                error: null
            };

        case FETCH_MY_TASKS_REJECTED:
            return {
                ...state,
                fetching: false,
                error: action.error
            };

        case FETCH_MY_TASKS_FULFILLED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                tasks: action.payload.data
            };

        case DELETE_FINISHED_PROJECT:
            return deleteFinishedProject(state, action.projectId);

        default:
            return state;
    }
};


const deleteFinishedProject = (state, projectId) => {
    let stateCopy = {...state};
    stateCopy.projects = [...state.projects];

    let projectToDelete = findById(stateCopy.projects, projectId);
    let projectToDeleteIndex = stateCopy.projects.indexOf(projectToDelete);

    stateCopy.projects.splice(projectToDeleteIndex, 1);

    return stateCopy;
};

const findById = (array, Id) => {
    return array.filter(item => item.id === Id)[0];
};


//Action Creators
export const setMustFetchMyProjectsCreator = (newValue) => {
    return {
        type: SET_MUST_FETCH_MY_PROJECTS,
        newValue: newValue
    }
};

export const setMustFetchMyTasksCreator = (newValue) => {
    return {
        type: SET_MUST_FETCH_MY_TASKS,
        newValue: newValue
    }
};

export const fetchMyProjectsCreator = () => {
    return {
        type: FETCH_MY_PROJECTS,
        payload: axios.get("http://localhost:8080/projects/user/1")
    }
};

export const fetchMyTasksCreator = () => {
    return {
        type: FETCH_MY_TASKS,
        payload: axios.get("http://localhost:8080/users/tasks/1")
    }
};

export const deleteFinishedProjectCreator = (projectId) => {
    return {
        type: DELETE_FINISHED_PROJECT,
        projectId: projectId
    }
};



export default profileReducer;









import axios from 'axios'

const SET_MUST_FETCH_TASKS = "SET_MUST_FETCH_TASKS";
const FETCH_TASKS = "FETCH_TASKS";
const FETCH_TASKS_PENDING = "FETCH_TASKS_PENDING";
const FETCH_TASKS_FULFILLED = "FETCH_TASKS_FULFILLED";
const FETCH_TASKS_REJECTED = "FETCH_TASKS_REJECTED";

const ADD_TASK_TO_USER = "ADD_TASK_TO_USER";
const REMOVE_TASK_FROM_USER = "REMOVE_TASK_FROM_USER";


let initialState = {
    //todo hack
    mustFetch: true,

    fetching: false,
    fetched: false,
    error: null,

    tasks: []
};

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MUST_FETCH_TASKS:
            return {
                ...state,
                mustFetch: action.newValue
            };

        case FETCH_TASKS_PENDING:
            console.log("pending");
            return {
                ...state,
                fetching: false,
                error: null
            };

        case FETCH_TASKS_REJECTED:
            console.log('rejected');

            return {
                ...state,
                fetching: false,
                error: action.error
            };

        case FETCH_TASKS_FULFILLED:
            let tasks = prepareTasksToDisplay(action.payload.data);
            return {
                ...state,
                fetching: false,
                fetched: true,
                tasks: tasks
            };

        case ADD_TASK_TO_USER:
            addTaskToUser(state, action.taskId).then(x => {
            });

            return state;

        case REMOVE_TASK_FROM_USER:
            return removeTaskFromUser(state, action.taskId);

        default:
            return state;
    }
};

const addTaskToUser = (state, taskId) => {
    let stateCopy = {...state};
    stateCopy.tasks = [...state.tasks];

    let taskToAdd = findById(stateCopy.tasks, taskId);

    return axios.post("http://localhost:8080/users/addTask", buildTaskDto(taskToAdd))
        .then(resp => resp.data)
        .then(data => {
            return axios.get('http://127.0.0.1:8080/tasks')
                .then(resp => resp.data)
                .then(data => {
                    console.log('data fetched');
                    stateCopy.tasks = data;
                });
        });

    /*    let request = {
            method: 'GET',
        };
        fetch('http://127.0.0.1:8080/tasks',request)
            .then(function(response)  {
                return response.json();
            })
            .then(data => {
                stateCopy.tasks  = data;
                console.log(stateCopy);
                console.log('RETURNING');
                return tasksReducer(stateCopy, {});
            });*/
    return stateCopy;
};

const prepareTasksToDisplay = (tasksDtos) => {
    tasksDtos.forEach(o => {
        o.deadline = new Date(o.deadline.substring(0, o.deadline.indexOf('Z') + 1));
    });
    return tasksDtos;
};

const buildTaskDto = (task) => {
    return {
        id: task.id,
        name: task.name,
        deadline: task.deadline,
        description: task.description,
        statusCode: task.statusCode,
        salary: task.salary,
        projectId: task.projectId,
        userIds: [1], //todo hack
        users: task.users
    }
};

const removeTaskFromUser = (state, taskId) => {
    let stateCopy = {...state};
    stateCopy.tasks = [...state.tasks];

    console.log(state.tasks);

    let taskToDelete = findById(stateCopy.tasks, taskId);
    let taskToDeleteIndex = stateCopy.tasks.indexOf(taskToDelete);

    axios.post("http://localhost:8080/tasks/removeTask", buildTaskDto(taskToDelete))
        .then(resp => resp.data)
        .then(data => {
            return axios.get('http://127.0.0.1:8080/tasks')
                .then(resp => resp.data)
                .then(data => {
                    console.log('data fetched');
                    stateCopy.tasks = data;
                });
        });


    return stateCopy;

};

const findById = (array, Id) => {
    return array.filter(item => item.id === Id)[0];
};

//Action Creators
export const setMustFetchTasksCreator = (newValue) => {
    return {
        type: SET_MUST_FETCH_TASKS,
        newValue: newValue
    }
};

export const fetchTasksCreator = () => {
    return {
        type: FETCH_TASKS,
        payload: axios.get("http://localhost:8080/tasks")
    }
};

export const addTaskToUserCreator = (taskId) => {
    return {
        type: ADD_TASK_TO_USER,
        taskId: taskId
    }
};

export const removeTaskFromUserCreator = (taskId) => {
    return {
        type: REMOVE_TASK_FROM_USER,
        taskId: taskId
    }
};

export default tasksReducer;
const ADD_TASK = "ADD_TASK";
const DELETE_FINISHED_PROJECT = 'DELETE_FINISHED_PROJECT';
const DELETE_DONE_TASK = "DELETE_DONE_TASK";


let initialState = {
    userId: 1,
    name: "Alyona",
    surname: "Alfyorova",
    email: "@",

    tasks: [
        {
            id: 1,
            name: "good",
            salary: 10,
            status: 2,
            projectId: 1,
            deadline: "2019-04-31 23:00:43.573000",
            description: "do something"
        }
    ],

    projects: [
        {
            id: 1,
            creatorId: 1,
            name: "work",
            status: 1,
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
            id: 1,
            creatorId: 1,
            name: "work",
            status: 1,
            description: "do",
            deadline: "2019-03-31 23:00:43.573000",
            tasks: []
        }

    ]
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case DELETE_FINISHED_PROJECT:
            return deleteFinishedProject(state, action.projectId);
        case DELETE_DONE_TASK:
            return deleteDoneTask(state, action.taskId);

        default:
            return state;
    }
};

const deleteDoneTask = (state = initialState, taskId) => {
    let stateCopy = {...state};
    stateCopy.tasks = [...stateCopy.tasks];

    let taskToDelete = findById(stateCopy.tasks, taskId);
    let taskToDeleteIndex = stateCopy.tasks.indexOf(taskToDelete);

    stateCopy.tasks.splice(taskToDeleteIndex, 1);

    return stateCopy;
};


const deleteFinishedProject = (state, projectId) => {
    let stateCopy = {...state};
    stateCopy.projects = [...stateCopy.projects];

    let projectToDelete = findById(stateCopy.projects, projectId);
    let projectToDeleteIndex = stateCopy.projects.indexOf(projectToDelete);

    stateCopy.projects.splice(projectToDeleteIndex, 1);

    return stateCopy;
};

const findById = (array, Id) => {
    return array.filter(item => item.id === Id)[0];
};

//Action Creators
export const deleteFinishedProjectCreator = (projectId) => {
    return {
        type: DELETE_FINISHED_PROJECT,
        projectId: projectId
    }
};

export const deleteDoneTaskCreator = (taskId) => {
    return {
        type: DELETE_DONE_TASK,
        taskId: taskId
    }
}

export default profileReducer;









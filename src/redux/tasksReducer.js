import {connect} from "react-redux";

const ADD_TASK = 'ADD_TASK';

let initialState = {
    tasks: [
        {
            id: 1,
            name: "good",
            salary: 10,
            status: 0,
            projectId: 1,
            deadline: "2019-04-31 23:00:43.573000",
            description: "do something",
            users: [
                {
                    userId: 1,
                    name: "Alyona",
                    surname: "Alfyorova",
                    email: "@"
                }
            ]
        },

        {
            id: 2,
            name: "bad",
            salary: 100,
            status: 0,
            projectId: 1,
            deadline: "2019-04-31 23:00:43.573000",
            description: "do nothing",
            users: []
        },

        {
            id: 3,
            name: "bad",
            salary: 100,
            status: 0,
            projectId: 1,
            deadline: "2019-04-31 23:00:43.573000",
            description: "do nothing",
            users: []
        },

        {

            id: 4,
            name: "new",
            salary: 1000,
            status: 0,
            projectId: 1,
            deadline: "2019-04-31 23:00:43.573000",
            description: "do nothing",
            users: []
        }
    ]
};

const tasksReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;

    }
};

const findByTaskId = (array, taskId) => {
    return array.filter(item => item.id === taskId)[0];
};

export default tasksReducer;
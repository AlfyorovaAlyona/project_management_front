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
            status: 0,
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

        }
    ]
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default profileReducer;









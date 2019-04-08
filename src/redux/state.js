let state = {

    ProfilePage: {
        userId: 1,
        name: "Alyona",
        surname: "Alfyorova",
        email: "@"

    },

    MyProjectsPage: {
        MyProjects: [
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
                    }
                ]
            }

        ]
    },


    MyTasksPage: {
        MyTasks: [
            {
                id: 1,
                name: "good",
                salary: 10,
                status: 0,
                projectId: 1,
                deadline: "2019-04-31 23:00:43.573000",
                description: "do something"
            }
        ]
    }


};

export default state;
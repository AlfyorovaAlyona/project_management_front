const DELETE_UNPROCESSED_PROJECT = 'DELETE-UNPROCESSED-ORDER';

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
        }

    ]
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
      case DELETE_UNPROCESSED_PROJECT:
          return deleteUnprocessedProject(state, action.projectIdx);
      default:
          return state;
  }  
};

const deleteUnprocessedProject = (state, projectIdx) => {
    let stateCopy = {...state};
    stateCopy.projects = [...stateCopy.projects];
    stateCopy.projects.splice(projectIdx, 1);

    return stateCopy;
};

//Action Creators
export const deleteUnprocessedProjectCreator = (projectIdx) => {
    return {
        type: DELETE_UNPROCESSED_PROJECT,
        orderIdx: projectIdx
    }
};

export default projectsReducer;

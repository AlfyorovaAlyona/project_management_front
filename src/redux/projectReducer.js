const DELETE_FINISHED_PROJECT = 'DELETE_FINISHED_PROJECT';
const SET_MUST_FETCH_PROJECTS = 'SET_MUST_FETCH_PROJECTS';

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
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
      case DELETE_FINISHED_PROJECT:
          return deleteFinishedProject(state, action.projectId);
      default:
          return state;
  }  
};

const deleteFinishedProject = (state, projectId) => {
    let stateCopy = {...state};
    stateCopy.projects = [...stateCopy.projects];

    let projectToDelete = findByProjectId(stateCopy.projects, projectId);
    let projectToDeleteIndex = stateCopy.projects.indexOf(projectToDelete);

    stateCopy.projects.splice(projectToDeleteIndex, 1);

    return stateCopy;
};

const findByProjectId = (array, projectId) => {
    return array.filter(item => item.id === projectId)[0];
};

//Action Creators
export const deleteFinishedProjectCreator = (projectId) => {
    return {
        type: DELETE_FINISHED_PROJECT,
        projectId: projectId
    }
};

export const setMustFetchCreator = (newValue) => {
    return {
        type: SET_MUST_FETCH_PROJECTS,
        newValue: newValue
    }
};

export default projectsReducer;

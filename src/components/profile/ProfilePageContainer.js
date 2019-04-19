import {connect} from "react-redux";
import ProfilePage from './ProfilePage';
import { deleteFinishedProjectCreator,   setMustFetchMyProjectsCreator,
        setMustFetchMyTasksCreator, fetchMyProjectsCreator,         fetchMyTasksCreator} from "../../redux/profileReducer";
import {removeTaskFromUserCreator, setMustFetchTasksCreator, fetchTasksCreator} from "../../redux/tasksReducer";

let mapStageToProps = (state) => {
    return {
        mustFetchProjects: state.profilePage.mustFetchProjects,
        mustFetchTasks: state.profilePage.mustFetchTasks,

        userId: state.profilePage.userId,
        name: state.profilePage.name,
        surname: state.profilePage.surname,
        email: state.profilePage.email,

        tasks: state.profilePage.tasks,
        projects: state.profilePage.projects
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        deleteFinishedProject: (projectId) => {
            dispatch(deleteFinishedProjectCreator(projectId))
        },
        setMustFetchMyProjects: (newValue) => {
            dispatch(setMustFetchMyProjectsCreator(newValue))
        },
        setMustFetchMyTasks : (newValue) => {
            dispatch(setMustFetchMyTasksCreator(newValue))
        },
        fetchMyTasks : () => {
            dispatch(fetchMyTasksCreator())
        },
        fetchMyProjects : () => {
            dispatch(fetchMyProjectsCreator())
        },
        removeTaskFromUser: (taskId) => {
            dispatch(removeTaskFromUserCreator(taskId));
            //dispatch(setMustFetchMyTasksCreator(true));
            //dispatch(setMustFetchTasksCreator(true));
        }
    }
};

let ProfilePageContainer = connect(mapStageToProps, mapDispatchToProps)(ProfilePage);

export default ProfilePageContainer;

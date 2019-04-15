import {connect} from "react-redux";
import Profile from './Profile';
import {deleteDoneTaskCreator, deleteFinishedProjectCreator} from "../../redux/profileReducer";

let mapStageToProps = (state) => {
    return {
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
        deleteDoneTask: (taskId) => {
            dispatch(deleteDoneTaskCreator(taskId))
        }
    }
};

let ProfilePageContainer = connect(mapStageToProps, mapDispatchToProps)(Profile);

export default ProfilePageContainer;

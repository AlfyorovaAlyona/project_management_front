import {connect} from "react-redux";
import Profile from './Profile';

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

};

let ProfilePageContainer = connect(mapStageToProps, mapDispatchToProps)(Profile);

export default ProfilePageContainer;

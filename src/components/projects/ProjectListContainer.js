import {connect} from "react-redux";
import {deleteFinishedProjectCreator} from "../../redux/projectReducer";
import ProjectList from "./ProjectList";

let mapStageToProps = (state) => {
    return {
        projects: state.projectsPage.projects
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        deleteFinishedProject: (projectId) => {
            dispatch(deleteFinishedProjectCreator(projectId))
        }
    }
};

let ProjectListContainer = connect(mapStageToProps, mapDispatchToProps)(ProjectList);

export default ProjectListContainer;

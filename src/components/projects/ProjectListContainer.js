import React from 'react';
import {connect} from "react-redux";
import {deleteUnprocessedProjectCreator} from "../../redux/projectReducer";
import ProjectList from "./ProjectList";

let mapStageToProps = (state) => {
    return {
        projects: state.projectsPage.projects
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        deleteUnprocessedProject: (projectIdx) => {
            dispatch(deleteUnprocessedProjectCreator(projectIdx))
        }
    }
};

let ProjectListContainer = connect(mapStageToProps, mapDispatchToProps)(ProjectList);

export default ProjectListContainer;

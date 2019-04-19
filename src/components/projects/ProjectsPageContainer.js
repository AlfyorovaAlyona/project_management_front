import {connect} from "react-redux";
import ProjectsPage from "./ProjectsPage"
import {fetchProjectsCreator, setMustFetchProjectsCreator} from "../../redux/projectsReducer";

let mapStageToProps = (state) => {
    return {
        mustFetch: state.projectsPage.mustFetch,
        projects: state.projectsPage.projects
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        setMustFetchProjects: (newValue) => {
            dispatch(setMustFetchProjectsCreator(newValue));
        },
        fetchProjects: () => {
            dispatch(fetchProjectsCreator());
        }
    };
};

let ProjectsPageContainer = connect(mapStageToProps, mapDispatchToProps)(ProjectsPage);

export default ProjectsPageContainer;

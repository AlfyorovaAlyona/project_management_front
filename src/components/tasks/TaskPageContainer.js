import {connect} from "react-redux";
import TaskPage from "./TaskPage";

let mapStageToProps = (state) => {
    return {
        tasks: state.tasksPage.tasks,
        users: state.tasksPage.users
    }
};

let mapDispatchToProps = (dispatch) => {

};

let TaskPageContainer = connect(mapStageToProps, mapDispatchToProps)(TaskPage);

export default TaskPageContainer;

import {connect} from "react-redux";
import TaskList from './TaskList';

let mapStageToProps = (state) => {
    return {
        tasks: state.tasksPage.tasks,
        users: state.tasksPage.users
    }
};

let mapDispatchToProps = (dispatch) => {

};

let TaskPageContainer = connect(mapStageToProps, mapDispatchToProps)(TaskList);

export default TaskPageContainer;

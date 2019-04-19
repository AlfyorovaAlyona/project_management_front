import {connect} from "react-redux";
import TasksPage from "./TasksPage";
import {
    addTaskToUserCreator,
    fetchTasksCreator,
    setMustFetchTasksCreator,
    removeTaskFromUserCreator
} from "../../redux/tasksReducer";
import {setMustFetchMyProjectsCreator, setMustFetchMyTasksCreator} from "../../redux/profileReducer";

let mapStageToProps = (state) => {
    return {
        mustFetch: state.tasksPage.mustFetch,
        tasks: state.tasksPage.tasks
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        setMustFetchTasks: (newValue) => {
            dispatch(setMustFetchTasksCreator(newValue));
        },
        fetchTasks: () => {
            dispatch(fetchTasksCreator());
        },
        addTaskToUser: (taskId) => {
            dispatch(addTaskToUserCreator(taskId));
            dispatch(setMustFetchTasksCreator(true));
        },
        removeTaskFromUser: (taskId) => {
            dispatch(removeTaskFromUserCreator(taskId));
            dispatch(setMustFetchTasksCreator(true));
            dispatch(setMustFetchMyTasksCreator(true));
        }
    };
};

let TasksPageContainer = connect(mapStageToProps, mapDispatchToProps)(TasksPage);

export default TasksPageContainer;

import {connect} from "react-redux";
import TasksPage from "./TasksPage";
import {
    addTaskToUserCreator,
    fetchTasksCreator,
    setMustFetchTasksCreator,
    removeTaskFromUserCreator
} from "../../redux/tasksReducer";
import {setMustFetchMyTasksCreator} from "../../redux/profileReducer";

let mapStageToProps = (state) => {
    return {
        mustFetch: state.tasksPage.mustFetch,
        tasks: state.tasksPage.tasks
    }
};

let mapDispatchToProps = (dispatch) => {
    console.log('dispatch');
    console.log(dispatch);
    return {
        setMustFetchTasks: (newValue) => {
            console.log("set MustFetch tasks" + newValue);
            dispatch(setMustFetchTasksCreator(newValue));
        },
        fetchTasks: () => {
            dispatch(fetchTasksCreator());
        },
        addTaskToUser: (taskId) => {
            console.log("set MustFetch tasks ");

            dispatch(addTaskToUserCreator(taskId));
            console.log("set MustFetch tasks true");

            //dispatch(setMustFetchTasksCreator(true));
            //dispatch(setMustFetchMyTasksCreator(true));
        },
        removeTaskFromUser: (taskId) => {
            dispatch(removeTaskFromUserCreator(taskId));
        }
    };
};

let TasksPageContainer = connect(mapStageToProps, mapDispatchToProps)(TasksPage);

export default TasksPageContainer;

import React from 'react';
import TaskItem from './TaskItem';

const TaskList = (props) => {
    let tasks = props.state.MyTasks
                .map(task => <TaskItem id={task.id}
                                       salary={task.salary}
                                       status={task.status}
                                       name={task.name}
                                       description={task.description}
                                       deadline={task.deadline}/>);
    return (
        <div>
            {tasks}
        </div>
    )
};

export default TaskList;



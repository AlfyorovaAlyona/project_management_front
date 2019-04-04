import React from 'react';
import TaskItem from './TaskItem';

let taskItems = [
    {
        id: 1,
        deadline: "2019-04-30 23:00:43.573000",
        salary: 1000,
        status: 0,
        name: "good",
        description: "do"
    },
    {
        id: 2,
        deadline: "2019-04-31 00:00:43.573000",
        salary: 1,
        status: 0,
        name: "bad",
        description: "not do"
    }
];

const TaskList = (props) => {
    return (
        <div>
            <TaskItem id={taskItems[0].id}             name={taskItems[0].name}     salary={taskItems[0].salary}
                      deadline={taskItems[0].deadline} status={taskItems[0].status} description={taskItems[0].description} />

            <TaskItem id={taskItems[0].id}             name={taskItems[0].name}     salary={taskItems[0].salary}
                      deadline={taskItems[0].deadline} status={taskItems[0].status} description={taskItems[0].description} />
        </div>
    )
};

export default TaskList;



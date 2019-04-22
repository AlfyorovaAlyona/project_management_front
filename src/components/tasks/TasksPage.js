import React from 'react';
import Task from "./item/Task";
import Profile from "../profile/item/Profile";
import TasksHeader from "../headers/TasksHeader";

const TasksPage = (props) => {

    const func = () => {
        props.fetchTasks();
    };

    setTimeout(func, 1000);

    if (props.mustFetch) {
        props.fetchTasks();
        props.setMustFetchTasks(false);
    }

    let tasks = props.tasks
        .map((task) => <Task id={task.id}
                             key={task.id}
                             name={task.name}
                             button={true}
                             isItProject={false}
                             description={task.description}
                             deadline={task.deadline}
                             salary={task.salary}
                             addTaskToUser={props.addTaskToUser}
                             removeTaskFromUser={props.removeTaskFromUser}
                             statusCode={task.statusCode}
                             projectId={task.projectId}
                             users={task.users
                                 .map((user) => <Profile id={user.id}
                                                         key={user.id}
                                                         name={user.name}
                                                         surname={user.surname}
                                                         email={user.email}/>)}
                                />);
    if (tasks.length === 0) {
        return (
            <div>
                <div>
                    <TasksHeader/>
                </div>
                No tasks created
            </div>
        );
    } else return (
        <div>
            <div>
                <TasksHeader/>
            </div>
            <div className="list-group">
                {tasks}
            </div>
        </div>
    );

};

export default TasksPage;
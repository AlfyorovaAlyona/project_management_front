import React from 'react';
import TaskItem from './TaskItem';
import ProfileItem from "../profile/ProfileItem";

const TaskList = (props) => {
    let tasks = props.tasks
                .map((task, index) => {
                    if (task.users != null)
                    return <TaskItem   id={task.id}
                                       index={index}
                                       salary={task.salary}
                                       projectId={task.projectId}
                                       status={task.status}
                                       name={task.name}
                                       description={task.description}
                                       deadline={task.deadline}
                                       users={task.users
                                                  .map(user => <ProfileItem userId={user.userId}
                                                                            name={user.name}
                                                                            surname={user.surname}
                                                                            email={user.email}/>)
                                       }/>;
                    else return <TaskItem id={task.id}
                                          salary={task.salary}
                                          projectId={task.projectId}
                                          status={task.status}
                                          name={task.name}
                                          description={task.description}
                                          deadline={task.deadline}/>
                });
    return (
        <div>
            {tasks}
        </div>
    )
};

export default TaskList;



import React from 'react';
import Task from "./item/Task";
import ProfileItem from "../profile/ProfileItem"

let TaskPage = (props) => {
    let tasks = props.tasks
        .map(task =>  {
                   if (task.users != null)
                   return <Task    id={task.id}
                                   key={task.id}
                                   salary={task.salary}
                                   status={task.status}
                                   name={task.name}
                                   description={task.description}
                                   deadline={task.deadline}
                                   users={task.users
                                    .map(user => <ProfileItem   userId={user.userId}
                                                                          name={user.name}
                                                                          surname={user.surname}
                                                                          email={user.email}/>)
                     }/>;
                   else return <Task   id={task.id}
                                       salary={task.salary}
                                       status={task.status}
                                       name={task.name}
                                       description={task.description}
                                       deadline={task.deadline}/>
        });
    return (
        {tasks}
    );

};

export default TaskPage;
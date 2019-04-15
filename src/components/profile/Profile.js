import React from 'react';
import ProfileItem from "./ProfileItem";
import Task from "../tasks/item/Task";
import Project from "../projects/item/Project";

const Profile = (props) => {
    if (props.tasks || props.projects != null)
    return  <ProfileItem   userId={props.userId}
                            name={props.name}
                            surname={props.surname}
                            email={props.email}
                            tasks={props.tasks
                                .map((task, index) =>  <Task  id={task.id}
                                                                  index={index}
                                                                  button={true}
                                                                  deleteDoneTask={props.deleteDoneTask}
                                                                salary={task.salary}
                                                                projectId={task.projectId}
                                                                status={task.status}
                                                                name={task.name}
                                                                description={task.description}
                                                                deadline={task.deadline}/>)}
                            projects={props.projects
                                .map((project, index) => <Project   id={project.id}
                                                                        index={index}
                                                                        creatorId={project.creatorId}
                                                                        status={project.status}
                                                                        name={project.name}
                                                                        description={project.description}
                                                                        deadline={project.deadline}
                                                                        deleteFinishedProject={props.deleteFinishedProject}
                                                                        button={true}
                                                                        tasks={project.tasks
                                                                        .map(task => <Task  id={task.id}
                                                                                                salary={task.salary}
                                                                                                status={task.status}
                                                                                                name={task.name}
                                                                                                description={task.description}
                                                                                                deadline={task.deadline}/>)}/>)}

    />;
    else return <ProfileItem userId={props.userId}
                             name={props.name}
                             surname={props.surname}
                             email={props.email} />;
};

export default Profile;
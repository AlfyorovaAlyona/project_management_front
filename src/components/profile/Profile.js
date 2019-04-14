import React from 'react';
import ProfileItem from "./ProfileItem";
import TaskItem from "../tasks/TaskItem";
import ProjectItem from "../projects/ProjectItem";

const Profile = (props) => {
    if (props.tasks || props.projects != null)
    return  <ProfileItem userId={props.userId}
                            name={props.name}
                            surname={props.surname}
                            email={props.email}
                            tasks={props.tasks
                                .map(task =>  <TaskItem  id={task.id}
                                                                salary={task.salary}
                                                                projectId={task.projectId}
                                                                status={task.status}
                                                                name={task.name}
                                                                description={task.description}
                                                                deadline={task.deadline}/>)}
                            projects={props.projects
                                .map(project => <ProjectItem   id={project.id}
                                                                        creatorId={project.creatorId}
                                                                        status={project.status}
                                                                        name={project.name}
                                                                        description={project.description}
                                                                        deadline={project.deadline}
                                                                        deleteFinishedProject={project.deleteFinishedProject}
                                                                        tasks={project.tasks
                                                                        .map(task => <TaskItem  id={task.id}
                                                                                                salary={task.salary}
                                                                                                status={task.status}
                                                                                                name={task.name}
                                                                                                description={task.description}
                                                                                                deadline={task.deadline}/>)}/>)} />;
    else return <ProfileItem userId={props.userId}
                             name={props.name}
                             surname={props.surname}
                             email={props.email} />;
};

export default Profile;
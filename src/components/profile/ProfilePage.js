import React from 'react';
import Profile from "./item/Profile";
import Task from "../tasks/item/Task";
import Project from "../projects/item/Project";
import ProfileHeader from "../headers/ProfileHeader";

const ProfilePage = (props) => {
    if (props.mustFetchTasks || props.mustFetch) {
        props.fetchMyTasks();
        props.setMustFetchMyTasks(false);
    }

    if (props.mustFetchProjects) {
        props.fetchMyProjects();
        props.setMustFetchMyProjects(false);
    }

    if (props.tasks || props.projects != null)
    return  <div>
                <div>
                    <ProfileHeader/>
                </div>
                <div>
                <Profile userId={props.id}
                             name={props.name}
                             surname={props.surname}
                             email={props.email}
                             tasks={props.tasks
                                        .map((task) =>  <Task id={task.id}
                                                                        key={task.id}
                                                                        button={true}
                                                                        isItProject={false}
                                                                        salary={task.salary}
                                                                        projectId={task.projectId}
                                                                        removeTaskFromUser={props.removeTaskFromUser}
                                                                        status={task.status}
                                                                        name={task.name}
                                                                        description={task.description}
                                                                        deadline={task.deadline}/>)}
                             projects={props.projects
                                        .map((project) => <Project   id={project.id}
                                                                                key={project.id}
                                                                                creatorId={project.creatorId}
                                                                                status={project.status}
                                                                                name={project.name}
                                                                                description={project.description}
                                                                                deadline={project.deadline}
                                                                                deleteFinishedProject={props.deleteFinishedProject}
                                                                                tasks={project.tasks
                                                                                .map(task => <Task  id={task.id}
                                                                                                            isItProject={true}
                                                                                                        key={task.id}
                                                                                                        salary={task.salary}
                                                                                                        status={task.status}
                                                                                                        name={task.name}
                                                                                                        projectId={task.projectId}
                                                                                                        description={task.description}
                                                                                                        deadline={task.deadline}/>)}/>)}/>;
                </div>
        </div>;
    else return (
        <div>
            <div>
                <ProfileHeader/>
            </div>
            <iv>
                <Profile userId={props.id}
                             name={props.name}
                             surname={props.surname}
                             email={props.email} />;
            </iv>

        </div>)
};

export default ProfilePage;
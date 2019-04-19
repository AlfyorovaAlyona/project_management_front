import React from 'react';
import Project from "./item/Project";
import Task from "../tasks/item/Task";
import ProjectsHeader from "../headers/ProjectsHeader";

const ProjectsPage = (props) => {

    if (props.mustFetch) {
        props.fetchProjects();
        props.setMustFetchProjects(false);
    }

    let projects = props.projects
        .map((project) => {if (project.tasks.length > 0) return (
                                            <Project id={project.id}
                                             key={project.id}
                                             name={project.name}
                                             description={project.description}
                                             deadline={project.deadline}
                                             statusCode={project.statusCode}
                                             creatorId={project.creatorId}
                                             tasks={project.tasks
                                                .map((task) => { return <Task  id={task.id}
                                                                                button={false}
                                                                               isItProject={true}
                                                                               key={task.id}
                                                                                name={task.name}
                                                                                description={task.description}
                                                                                deadline={task.deadline}
                                                                                salary={task.salary}
                                                                                statusCode={task.statusCode}
                                                                                projectId={task.projectId}/>})}/>);
                                    else if (project.tasks.length === 0) return (
                                        <Project id={project.id}
                                                 key={project.id}
                                                 name={project.name}
                                                 description={project.description}
                                                 deadline={project.deadline}
                                                 statusCode={project.statusCode}
                                                 creatorId={project.creatorId}
                                                 tasks={"That project has no tasks yet"}/>)
        });
    if (projects.length === 0) {
        return (
            <div>
                <div>
                    <ProjectsHeader/>
                </div>
                <div>
                    No projects. Go make a one!
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <div>
                    <ProjectsHeader/>
                </div>
                <div>
                    {projects}
                </div>
            </div>
        )
    }

};

export default ProjectsPage;
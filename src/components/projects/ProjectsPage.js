import React from 'react';
import Project from "./item/Project";
import Task from "../tasks/item/Task";

const ProjectsPage = (props) => {
    if (props.mustFetch) {
        props.fetchProjects();
        props.setMustFetch(false);
    }

    let projects = props.projects
        .map((project) => <Project id={project.id}
                                            key={project.id}
                                            name={project.name}
                                            description={project.description}
                                            deadline={project.deadline}
                                            status={project.status}
                                            creatorId={project.creatorId}
                                            tasks={project.tasks
                                                .map((task) => <Task id={task.id}
                                                                            key={task.id}
                                                                            name={task.name}
                                                                            description={task.description}
                                                                            deadline={task.deadline}
                                                                            salary={task.salary}
                                                                            status={task.status}
                                                                            projectId={task.projectId}/>)}/>);
    if (projects.length === 0) {
        return (
            <div>
                No projects. Go make a one!
            </div>
        )
    } else {
        return (
            <div>
                {projects}
            </div>
        )
    }

};

export default ProjectsPage;
import React from 'react';
import ProjectItem from './ProjectItem'
import TaskItem from "../tasks/TaskItem";

const ProjectList = (props) => {
    let projects = props.projects
        .map((project, index) => <ProjectItem id={project.id}
                                              index={index}
                                              creatorId={project.creatorId}
                                              status={project.status}
                                              name={project.name}
                                              description={project.description}
                                              deadline={project.deadline}
                                              deleteFinishedProject={props.deleteFinishedProject}
                                              tasks={project.tasks
                                                 .map(task => <TaskItem id={task.id}
                                                                        salary={task.salary}
                                                                        status={task.status}
                                                                        name={task.name}
                                                                        description={task.description}
                                                                        deadline={task.deadline}/>)} />);
    return (
        <div>
            {projects}
        </div>
    )
};

export default ProjectList
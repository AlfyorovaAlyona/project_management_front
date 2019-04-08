import React from 'react';
import ProjectItem from './ProjectItem'

const ProjectList = (props) => {
    let projects = props.state.MyProjects
        .map(project => <ProjectItem id={project.id}
                                     creatorId={project.creatorId}
                                     status={project.status}
                                     name={project.name}
                                     description={project.description}
                                     deadline={project.deadline}/>);
    return (
        <div>
            {projects}
        </div>
    )
};

export default ProjectList
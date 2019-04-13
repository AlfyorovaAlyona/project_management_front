import React from 'react';
import styles from './ProjectItem.module.css';
import DeleteUnprocessedProjectButton from "./DeleteUnprocessedProjectButton";

const ProjectItem= (props) => {
    return (
        <div className={`${styles.projectItem} ${styles.textColor}`}>
            id: {props.id}
            <br/>
            name: {props.name}
            <br/>
            creatorId: {props.creatorId}
            <br/>
            description: {props.description}
            <br/>
            deadline: {props.deadline}
            <br/>

            <br/>
            tasks: {props.tasks}
            <DeleteUnprocessedProjectButton status={props.status}
                                        deleteUnprocessedProject={props.deleteUnprocessedProject}/>
        </div>
    )
};

export default ProjectItem;
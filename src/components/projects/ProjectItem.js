import React from 'react';
import styles from './ProjectItem.module.css';

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
            status: {props.status}
        </div>
    )
};

export default ProjectItem;
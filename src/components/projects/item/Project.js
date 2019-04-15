import React from 'react';
import style from "./Project.module.css"

const Project = (props) => {
    return (
        <div className={`${style.projectWrapper}`}>
            <div className={`${style.projectId}`}>
                Project #{props.id}
            </div>
            <div>
                {props.name}
            </div>
            <div>
                {props.description}
            </div>
            <div>
                {props.deadline}
            </div>
            <div>
                {props.creatorId}
            </div>
            <div>
                {props.status}
            </div>
            <div>
                {props.tasks}
            </div>
        </div>
    )
};

export default Project;
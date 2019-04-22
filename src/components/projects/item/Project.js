import React from 'react';
import style from "./Project.module.css"
import ProjectStatus from "./ProjectStatus";
import {convertJsDateToStringToDisplay} from "../../lib";

const Project = (props) => {
    return (
        <div className={`${style.projectWrapper} ${style.textColor}`}>
            <div className={`${style.projectId}`}>
                Project #{props.id}
            </div>
            <div className={`${style.name}`}>
                {props.name}
            </div>
            <div className={`${style.description}`}>
                Description: {props.description}
            </div>
            <div className={`${style.deadline}`}>
                Deadline: {convertJsDateToStringToDisplay(props.deadline)}
            </div>
            <div className={`${style.creatorId}`}>
                Creator: #{props.creatorId}
            </div>
            <div className={`${style.projectStatus}`}>
                Status: <ProjectStatus statusCode={props.statusCode}/>
            </div>
            <div className={`${style.tasks}`}>
                Tasks: {props.tasks}
            </div>
        </div>
    )
};

export default Project;
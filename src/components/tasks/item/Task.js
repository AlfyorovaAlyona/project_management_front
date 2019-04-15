import React from 'react';
import style from "./Task.module.css";

const Task = (props) => {

    const addTaskButtonClick = () => {
        alert("task was added to user");
    };

    if (props.hidden) {
        return null;
    }

    return (
        <div className={`${style.taskWrapper}`}>
            <div>
                task id #{props.id}
            </div>
            <div className={`${style.name}`}>
                {props.name}
            </div>
            <div className={`${style.description}`}>
                {props.description}
            </div>
            <div>
                {props.deadline}
            </div>
            <div className={`${style.projectId}`}>
                {props.projectId}
            </div>
            <div>
                {props.salary}
            </div>
            <div>
                {props.status}
            </div>
            <div>
                <button onClick={addTaskButtonClick}>
                    add
                </button>
            </div>
        </div>
    )

};

export default Task;
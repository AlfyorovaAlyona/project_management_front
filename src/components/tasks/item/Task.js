import React from 'react';
import style from "./Task.module.css";
import TaskStatus from "./TaskStatus";

const Task = (props) => {

    const removeTaskFromUser = () => {
        props.removeTaskFromUser(props.id);
        alert("Task has done")
    };

    const addTaskToUser = () => {
        props.addTaskToUser(props.id);
        alert("task was added to user");
    };

    //if (props.hidden) {
    //    return null;
    //}

    if (props.users != null && props.button)
        return (
            <div className={`${style.taskWrapper} ${style.textColor}`}>
                <div className={`${style.id}`}>
                    task id #{props.id}
                </div>
                <div className={`${style.name}`}>
                    Name: {props.name}
                </div>
                <div className={`${style.description}`}>
                    Description: {props.description}
                </div>
                <div className={`${style.deadline}`}>
                    Deadline: {props.deadline}
                </div>
                <div className={`${style.projectId}`}>
                    Of project #{props.projectId}
                </div>
                <div className={`${style.salary}`}>
                    Payment: {props.salary}
                </div>
                <div className={`${style.taskStatus}`}>
                    Status: <TaskStatus statusCode={props.statusCode}/>
                </div>
                <div className={`${style.addButton}`}>
                    <button type="button" className="btn btn-dark" onClick={addTaskToUser}>
                        Do it!
                    </button>
                    <button type="button" className="btn btn-dark" onClick={removeTaskFromUser}>
                        Done!
                    </button>
                </div>
                <div className={`${style.taskUsers}`}>
                    Performers: {props.users}
                </div>

            </div>
        );
    else if (!props.isItProject) return (
        <div className="list-group-item list-group-item-action flex-column align-items-start" title={"I have done it!"}>
        <div className="d-flex w-100 justify-content-between">
            <div className={`${style.id}`}>
                task id #{props.id}
            </div>
            <div className={`${style.taskStatus}`}>
                Status: <TaskStatus statusCode={props.statusCode}/>
            </div>
        </div>

        <div className="d-flex w-100 justify-content-between">
            <h1 className="mb-1">
                Name: {props.name}
            </h1>

            <p className={`${style.deadline}`}>
                Deadline: {props.deadline}
            </p>
            <p className={`${style.salary}`}>
                Payment: {props.salary}
            </p>
        </div>
        <div>
            <p className="mb-1">
                Description: {props.description}
            </p>

            <small className={`${style.projectId}`}>
                Of project #{props.projectId}
            </small>
        </div>
            <button type="button" className="btn btn-dark" onClick={removeTaskFromUser}>
                Done!
            </button>
    </div>);
    else return (
            <div className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    <div className={`${style.id}`}>
                        task id #{props.id}
                    </div>
                    <div className={`${style.taskStatus}`}>
                        Status: <TaskStatus statusCode={props.statusCode}/>
                    </div>
                </div>

                <div className="d-flex w-100 justify-content-between">
                    <h1 className="mb-1">
                        Name: {props.name}
                    </h1>

                    <p className={`${style.deadline}`}>
                        Deadline: {props.deadline}
                    </p>
                    <p className={`${style.salary}`}>
                        Payment: {props.salary}
                    </p>
                </div>
                <div>
                    <p className="mb-1">
                        Description: {props.description}
                    </p>

                    <small className={`${style.projectId}`}>
                        Of project #{props.projectId}
                    </small>
                </div>

            </div>
        )

};

export default Task;
import React from 'react';
import styles from './TaskItem.module.css';

const TaskItem = (props) => {
    if (props.users != null) {
        return (
            <div className={`${styles.taskItem} ${styles.textColor}`}>
                id: {props.id}
                <br/>
                name: {props.name}
                <br/>
                projectId: {props.projectId}
                <br/>
                deadline: {props.deadline}
                <br/>
                description: {props.description}
                <br/>
                salary: {props.salary}
                <br/>
                status: {props.status}
                <br/>
                users: {props.users}
                <br/>
            </div>
        )
    } else {
        return (
            <div className={`${styles.taskItem} ${styles.textColor}`}>
                id: {props.id}
                <br/>
                name: {props.name}
                <br/>
                projectId: {props.projectId}
                <br/>
                deadline: {props.deadline}
                <br/>
                description: {props.description}
                <br/>
                salary: {props.salary}
                <br/>
                status: {props.status}
                <br/>
            </div>
        )
    }

};

export default TaskItem;
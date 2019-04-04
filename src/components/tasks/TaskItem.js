import React from 'react';
import styles from './TaskItem.module.css';

const TaskItem = (props) => {
    return (
        <div className={`${styles.taskItem} ${styles.textColor}`}>
            id: {props.id}
            <br/>
            name: {props.name}
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
};

export default TaskItem;
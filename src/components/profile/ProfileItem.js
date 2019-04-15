import React from 'react';
import styles from './ProfileItem.module.css'

const ProfileItem = (props) => {
    if (props.tasks || props.projects != null)
        return <div className={`${styles.profileItem} ${styles.textColor}`}>
            userId: {props.userId}
            <br/>
            name: {props.name}
            <br/>
            surname: {props.surname}
            <br/>
            email: {props.email}
            <br/>
            myTasks: {props.tasks}
            <br/>
            myProjects: {props.projects}
        </div>;

    else return <div className={`${styles.profileItem} ${styles.textColor}`}>
        userId: {props.userId}
        <br/>
        name: {props.name}
        <br/>
        surname: {props.surname}
        <br/>
        email: {props.email}
        <br/>
        </div>
};

export default ProfileItem;
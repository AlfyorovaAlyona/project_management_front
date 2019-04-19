import React from 'react';
import styles from './Profile.module.css'

const callUser = () => {
    alert("Write to user")
};

const Profile = (props) => {
    if (props.tasks || props.projects != null)
        return <div className={`${styles.profileWrapper} ${styles.textColor}`}>
            userId: {props.id}
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

    else return <div onClick={callUser} className="list-group-item list-group-item-action flex-column align-items-start" title={"Write to user on email"}>
        userId: {props.id}
        <br/>
        name: {props.name}
        <br/>
        surname: {props.surname}
        <br/>
        email: {props.email}
        <br/>
        </div>
};

export default Profile;
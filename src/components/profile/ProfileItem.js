import React from 'react';
import styles from './ProfileItem.module.css'

const ProfileItem = (props) => {
    return (
        <div className={`${styles.profileItem} ${styles.textColor}`}>
            userId: {props.userId}
            <br/>
            name: {props.name}
            <br/>
            surname: {props.surname}
            <br/>
            email: {props.email}
        </div>
    )
};

export default ProfileItem;
import React from 'react';
import ProjectItem from "../projects/ProjectItem";
import ProfileItem from "./ProfileItem";

const Profile = (props) => {
    let user = <ProfileItem    userId={props.state.userId}
                               name={props.state.name}
                               surname={props.state.surname}
                               email={props.state.email}/>
    return (
        <div>
            {user}
        </div>
    )
};

export default Profile;
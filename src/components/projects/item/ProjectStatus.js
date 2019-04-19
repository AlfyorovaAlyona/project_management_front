import React from "react";

const ProjectStatus = (props) => {
    switch(props.statusCode) {
        case 0:
            return (
                <div>
                    Open
                </div>
            );
        case 1:
            return (
                <div>
                    Finished
                </div>
            );
        default:
            return (
                <div>
                    Unrecognized
                </div>
            );
    }
};

export default ProjectStatus;
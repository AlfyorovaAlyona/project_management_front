import React from "react";

const TaskStatus = (props) => {
    switch(props.statusCode) {
        case 0:
            return (
                <div>
                    Not Started
                </div>
            );
        case 1:
            return (
                <div>
                    In Progress
                </div>
            );
        case 2:
            return (
                <div>
                    Done
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

export default TaskStatus;
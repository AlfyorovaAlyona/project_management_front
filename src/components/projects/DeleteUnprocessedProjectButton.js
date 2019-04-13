import React from "react";

const DeleteUnprocessedProjectButton = (props) => {
    if (props.status === 0) {
        return (
            <button onClick={() => props.deleteUnprocessedProject(props.index)}>
                Delete
            </button>
        )
    } else {
        return null;
    }
};

export default DeleteUnprocessedProjectButton;
import React from "react";

const DeleteFinishedProjectButton = (props) => {
    if (props.status === 1) {
        return (
            <button onClick={() => props.deleteFinishedProject(props.index)}>
                Delete Project
            </button>
        )
    } else {
        return null;
    }
};

export default DeleteFinishedProjectButton;
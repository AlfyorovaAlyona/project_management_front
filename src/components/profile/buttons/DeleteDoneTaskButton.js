import React from "react";

const DeleteDoneTaskButton = (props) => {
    if (props.status === 2) {
        return (
            <button onClick={() => props.deleteDoneTask(props.index)}>
                Done
            </button>
        )
    } else {
        return null;
    }
};

export default DeleteDoneTaskButton;
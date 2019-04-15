import React from "react";

const AddTaskButton = (props) => {
    return (
        <button onClick={() => props.addTask(props.index)}>
            add
        </button>
    )
};
import React from "react";
import PropTypes from "prop-types";

import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  );
};

Tasks.propTypes = {
  title: PropTypes.array.isRequired,
  onAdd: PropTypes.func.isRequired,
  showAdd: PropTypes.func.isRequired,
};

export default Tasks;

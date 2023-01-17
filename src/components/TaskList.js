import React from "react";
import Task from "./Task";


function TaskList({ tasks, handleDelete }) {
  const taskList = tasks.map((task) => (
    <Task
      key={task.text}
      text={task.text}
      category={task.category}
      handleDelete={handleDelete}
    />
  ));
  return <div className="tasks">{taskList}</div>;
}

export default TaskList;
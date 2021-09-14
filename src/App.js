import React, { useState, useEffect } from "react";
import FormTodo from "./components/FormTodo";
import ListTodo from "./components/ListTodo";

function App() {
  const todosSave = localStorage.getItem("task")
    ? JSON.parse(localStorage.getItem("task"))
    : [];
  const [tasks, setTasks] = useState(todosSave);
  const [currentTask, setCurrentTask] = useState({});
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks));
  }, [tasks]);

  const handleEdit = (id) => {
    let currentTask = tasks.find((task) => task.id === id);
    setCurrentTask(currentTask);
    setEditing(true);
  };
  const removeTask = (id) => {
    setTasks(tasks.filter((e) => e.id !== id));
  };

  return (
    <div className="container">
      <FormTodo
        setTasks={setTasks}
        tasks={tasks}
        currentTask={currentTask}
        editing={editing}
        setEditing={setEditing}
      />
      <ListTodo tasks={tasks} handleEdit={handleEdit} removeTask={removeTask} />
    </div>
  );
}

export default App;

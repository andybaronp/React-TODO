import React, { useState, useEffect } from "react";
import FormTodo from "./components/FormTodo";
import ListTodo from "./components/ListTodo";

function App() {
  const todosSave = localStorage.getItem("task")
    ? JSON.parse(localStorage.getItem("task"))
    : [];
  const [task, setTask] = useState(todosSave);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  const hanbleEdit = (id) => {
    console.log(id);
  };
  return (
    <div className="container">
      <FormTodo setTask={setTask} task={task} />
      <ListTodo task={task} setTask={setTask} hanbleEdit={hanbleEdit} />
    </div>
  );
}

export default App;

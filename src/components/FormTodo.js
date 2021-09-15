import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const FormTodo = ({ currentTask, tasks, setTasks, editing, setEditing }) => {
  let getName = currentTask["name"] ? currentTask["name"] : "";
  let getDescription = currentTask["description"]
    ? currentTask["description"]
    : "";
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    setName(getName);
    setDescription(getDescription);
  }, [getName, getDescription]);

  const clearState = () => {
    setName("");
    setDescription("");
    setValidated(false);
    setEditing(false);
  };

  const savingTask = () => {
    setTasks([
      ...tasks,
      {
        name,
        description,
        id: Math.random().toString(36).substr(2.5),
        done: false,
      },
    ]);
    return clearState();
  };

  const editingTask = () => {
    let upDateTask = tasks.map((task) =>
      currentTask.id === task.id ? { ...task, name, description } : task
    );
    setTasks(upDateTask);
    return clearState();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      return setValidated(true);
    }

    !editing ? savingTask() : editingTask();
  };
  return (
    <>
      <h1 className="mt-3 text-center text-info"> Task list</h1>
      <div className="container row vh-50 justify-content-center aling-itens-center text-aling-center">
        <Form
          className="col-auto aling-text-center p-3 border mt-4 rounded mb-3"
          noValidate
          onSubmit={onSubmit}
          validated={validated}
          autoFocus
        >
          <Form.Group className="mb-3 " controlId="Name Todo">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="off"
              autoFocus
            />
            <Form.Control.Feedback type="invalid">
              Name is required
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="Description Todo">
            <Form.Label>Description Task</Form.Label>
            <Form.Control
              required
              type="text"
              name="description"
              autoComplete="off"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />{" "}
            <Form.Control.Feedback type="invalid">
              Description is required
            </Form.Control.Feedback>
          </Form.Group>
          <div className="d-grid gap-2  mx-auto ">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default FormTodo;

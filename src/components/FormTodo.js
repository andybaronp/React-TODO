import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const FormTodo = ({ task, setTask }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [validated, setValidated] = useState(false);
  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else {
      setDescription(e.target.value);
    }
  };

  const onSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setValidated(true);
    } else {
      e.preventDefault();
      setTask(() => [
        ...task,
        {
          name: name,
          description: description,
          id: new Date().getMilliseconds(),
          done: false,
        },
      ]);
      localStorage.setItem("task", JSON.stringify(task));
      setName("");
      setDescription("");
      setValidated(false);
    }
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
              onChange={(e) => handleChange(e)}
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
              onChange={(e) => handleChange(e)}
            />{" "}
            <Form.Control.Feedback type="invalid">
              Description is required
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default FormTodo;

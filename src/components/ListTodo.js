import React from "react";
import { Table, Button } from "react-bootstrap";
const ListTodo = ({ task, setTask, hanbleEdit }) => {
  const tasklength = task.length;
  const hanbleDone = (id) => {
    setTask(task.filter((e) => e.id !== id));
  };

  return (
    <>
      {task.length > 0 ? (
        <div>
          <h4> Pending Tasks: {tasklength} </h4>
          <Table striped bordered hover className="text-center">
            <thead>
              <tr>
                <th>Task Name</th>
                <th>Description</th>
                <th> Done</th>
              </tr>
            </thead>
            <tbody>
              {task.map(({ id, name, description }) => (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{description}</td>
                  <td className="d-grid gap-4">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => hanbleDone(id)}
                    >
                      Done
                    </Button>{" "}
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => hanbleEdit(id)}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ListTodo;

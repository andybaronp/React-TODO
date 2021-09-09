import React from "react";
import { Table, Button } from "react-bootstrap";
const ListTodo = ({ tasks, handleEdit, removeTask }) => {
  return (
    <>
      {tasks.length > 0 ? (
        <div>
          <h4> Pending Tasks: {tasks.length} </h4>
          <Table striped bordered hover className="text-center">
            <thead>
              <tr>
                <th>Task Name</th>
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map(({ id, name, description }) => (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{description}</td>
                  <td className="d-grid gap-4">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => removeTask(id)}
                    >
                      Done
                    </Button>{" "}
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleEdit(id)}
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

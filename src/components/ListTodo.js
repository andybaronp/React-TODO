import React from "react";
import { Table, Button } from "react-bootstrap";
const ListTodo = ({ tasks, handleEdit, removeTask }) => {
  return (
    <>
      {tasks.length > 0 ? (
        <div className="table table-responsive sm">
          <h4> Pending Tasks: {tasks.length} </h4>
          <Table striped bordered hover className="table text-center">
            <thead>
              <tr>
                <th>Task Name</th>
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody className="  align-middle">
              {tasks.map(({ id, name, description }) => (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{description}</td>
                  <td className="d-grid gap-0">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => removeTask(id)}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleEdit(id, name, description)}
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
        <div className="text-center info pt-5">
          <h3> No Tasks </h3>
        </div>
      )}
    </>
  );
};

export default ListTodo;

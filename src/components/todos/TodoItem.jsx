import React from "react";
import { Link } from "react-router-dom";
import { useDeleteTaskMutation } from "../../redux/api/taskApi";

const TodoItem = (todo) => {
  const [deleteTask, { isLoading, error }] = useDeleteTaskMutation();
  const handleDelete = (id) => {
    deleteTask(id);
  };
  if (isLoading) return <p>Loading..............</p>;
  if (error) console.log(error);
  return (
    <div className="p-4 shadow-lg w-25 m-4">
      <h4>Title: {todo?.todo?.title}</h4>
      <p>Description: {todo?.todo?.description}</p>
      <p>Status: {todo?.todo?.status}</p>
      <Link
        to={`/edit/${todo?.todo?._id}`}
        className="border-0 p-2 m-3 bg-primary text-white text-decoration-none"
      >
        Edit
      </Link>
      <button
        className="border-0 p-2 m-3 bg-danger"
        onClick={() => handleDelete(todo?.todo?._id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;

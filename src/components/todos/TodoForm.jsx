import React, { useState } from "react";
import { useCreateTaskMutation } from "../../redux/api/taskApi";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [createTask, { isLoading, error }] = useCreateTaskMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };
  if (isLoading) return <p>Loading..............</p>;
  if (error) console.log(error);
  return (
    <form onSubmit={handleSubmit} className="m-5">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Write Titles..."
        className="form-control ms-5 w-50"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Write Description..."
        className="form-control m-5 w-50"
      />
      <button
        type="submit"
        className="btn btn-warning text-white w-10 border-0 py-3 ms-5 "
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;

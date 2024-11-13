import React, { useEffect, useState } from "react";
import {
  useGetGiventaskQuery,
  useUpdateTaskMutation,
} from "../../redux/api/taskApi";
import { useNavigate, useParams } from "react-router-dom";

const TodoEditForm = () => {
  const [title, setTitle] = useState("");
  const { id } = useParams();
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState();
  const { data } = useGetGiventaskQuery(id);
  const [updateTask, { isLoading, error }] = useUpdateTaskMutation();
  const navigate = useNavigate();
  console.log(data);
  useEffect(() => {
    if (data) {
      setTitle(data?.title);
      setDescription(data?.description);
      setStatus(data?.status);
    }
  }, [data]);
  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask({ id, body: { title, description, status } });
    navigate("/");
  };
  const handleChange = (e) => {
    setStatus(e.target.value);
  };
  if (isLoading) return <p>Loading.....................</p>;
  if (error) console.log(error);
  return (
    <form onSubmit={handleSubmit} className="m-5 d-flex flex-column">
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
      <select
        id="options"
        value={status}
        onChange={handleChange}
        className="align-self-start mb-3 ms-5"
      >
        <option value="done">done</option>
        <option value="pending">pending</option>
        <option value="in progress">inProgress</option>
        <option value="completed">completed</option>
      </select>
      <button
        type="submit"
        className="btn btn-warning text-white w-10 border-0 py-3 ms-5 align-self-start "
      >
        Update
      </button>
    </form>
  );
};

export default TodoEditForm;

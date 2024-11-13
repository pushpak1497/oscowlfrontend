import React from "react";
import { useGetAllTasksQuery } from "../../redux/api/taskApi";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { data } = useGetAllTasksQuery();
  console.log(data);
  return (
    <div className="d-flex">
      {data?.map((each) => (
        <TodoItem todo={each} key={each._id} />
      ))}
    </div>
  );
};

export default TodoList;

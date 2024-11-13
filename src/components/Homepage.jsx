import React from "react";

import TodoList from "./todos/TodoList";

const Homepage = () => {
  return (
    <div>
      <h1 className="m-5">My Todos</h1>
      <TodoList />
    </div>
  );
};

export default Homepage;

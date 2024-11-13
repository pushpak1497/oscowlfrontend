import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Homepage from "./components/Homepage";
import Header from "./components/Header";
import TodoForm from "./components/todos/TodoForm";
import TodoEditForm from "./components/todos/TodoEditForm";
import Profile from "./components/user/Profile";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-todo" element={<TodoForm />} />
          <Route path="/edit/:id" element={<TodoEditForm />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

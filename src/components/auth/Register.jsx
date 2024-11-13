import React, { useEffect, useState } from "react";

// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../redux/api/authApi";

function Register() {
  const [user, setUser] = useState({});
  const { username, email, password } = user;
  const [register, { isLoading, error, isSuccess }] = useRegisterMutation();
  //   const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(username, email, password);
    register({ username, email, password });
  };
  useEffect(() => {
    // if (isAuthenticated) {
    //   navigate("/");
    // }
    if (error) {
      console.log(error?.data?.message);
    }
    if (isSuccess) {
      console.log("user created");
      navigate("/login");
    }
  }, [error, isSuccess, navigate]);
  const onchange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  return (
    <div className="row wrapper">
      <div className="col-10 col-lg-5">
        <form className="shadow rounded bg-body" onSubmit={handleRegister}>
          <h2 className="mb-4">Register</h2>

          <div className="mb-3">
            <label htmlFor="name_field" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="name_field"
              className="form-control"
              name="username"
              value={username}
              onChange={onchange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email_field" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email_field"
              className="form-control"
              name="email"
              value={email}
              onChange={onchange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password_field" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password_field"
              className="form-control"
              name="password"
              value={password}
              onChange={onchange}
            />
          </div>

          <button
            id="register_button"
            type="submit"
            disabled={isLoading}
            className="btn w-100 py-2"
          >
            {isLoading ? "Registering....." : "REGISTER"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;

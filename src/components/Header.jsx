import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";

const Header = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const handleLogout = () => {
    setIsDropDownOpen(!isDropDownOpen);
    console.log("logout");
  };
  return (
    <nav className="navbar row">
      <div className="col-12 col-md-3 ps-5">
        <div className="navbar-brand">
          <Link to="/" className="text-decoration-none">
            <h4 className="text-white">oscowl</h4>
          </Link>
        </div>
      </div>

      <div className="col-12 col-md-4 mt-4 mt-md-0 text-center">
        <Link to="/create-todo" style={{ textDecoration: "none" }}>
          Create Todo
        </Link>
        <button
          className="btn btn-outline-primary ms-5"
          onClick={() => setIsDropDownOpen(!isDropDownOpen)}
        >
          <FaRegUser className="size-8 text-white " />
        </button>
      </div>
      {isDropDownOpen && (
        <div className="positionabsolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
          <ul className="py-2 list-unstyled d-flex flex-column align-items-end">
            <Link
              to="/profile"
              className="text-decoration-none text-black"
              onClick={() => setIsDropDownOpen(!isDropDownOpen)}
            >
              <li>Profile</li>
            </Link>
            <li>
              <button onClick={handleLogout} className="border-0 bg-white">
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;

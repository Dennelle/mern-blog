import React from "react";
import { Link } from "react-router-dom";
import "../styling/App.css";

export default function Navbar({ user, logout }) {
  return (
    <div className="navBar">
      <nav>
        {user ? (
          <>
            <Link to="/" className="logo">
              The Tech Den
            </Link>
            <br />
            <Link onClick={logout}>Logout</Link>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/" className="logo">
              The Tech Den
            </Link>
          </>
        )}
      </nav>
    </div>
  );
}

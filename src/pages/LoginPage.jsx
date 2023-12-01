import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userService from "../utils/userService";
// import { tokenService } from "../utils/tokenService";

export default function LoginPage({ handleSignUporLogin }) {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await userService.login(state);
      navigate("/");
      handleSignUporLogin();
    } catch (err) {
      console.log(err);
      setError("error identified on LoginPage");
    }
  }

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>
      <h1>Login</h1>
      <form className="forms" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={state.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          value={state.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

import React from 'react';
import Header from "../../components/Header/Header";

export default function LoginPage(props) {
  return (
    <div>
      <Header />
      <h1>Login</h1>
      <form className="forms">
        <input type="text" placeholder="enter your username"></input>
        <input type="text" placeholder="enter your password"></input>
      </form>
      <button>Login</button>
      <button>Sign Up</button>
    </div>
  );
}

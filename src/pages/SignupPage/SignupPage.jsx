import Header from "../../components/Header/Header";
import { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function SignupPage() {
  return (
    <div>
      <Header />
      <h1>Sign Up</h1>
      <form className="forms">
        <input type="text" placeholder="create username"></input>
        <input type="text" placeholder="create password"></input>
        <input type="text" placeholder="create password"></input>
      </form>
      <button>Login</button>
      <button>Sign Up</button>
    </div>
  );
}

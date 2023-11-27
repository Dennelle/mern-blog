import Header from "../components/Header";
import { useState } from "react";
import ErrorMessage from "../components/ErrorMessage";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //pupsgram
  // const [state, setState] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  //   passwordConf: "",
  //   bio: "",
  // });

  async function signup(e) {
    e.preventDefault();
    await fetch("/", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application.json" },
    });
  }

  return (
    <div>
      <Header />
      <h1>Sign Up</h1>
      <form className="forms" onSubmit={signup}>
        <input
          type="text"
          placeholder="create username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="create password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <button>Login</button>
      <button>Sign Up</button>
    </div>
  );
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import ErrorMessage from "../components/ErrorMessage";
import userService from "../utils/userService";

export default function SignupPage({ handleSignUporLogin }) {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
    bio: "",
  });

  const [photo, setPhoto] = useState("");
  // const [error, setError] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append("photo", photo);
    // for (let key in state) {
    //   formData.append(key, state[key]);
    // }
    try {
      await userService.signup(state);
      handleSignUporLogin();
      navigate("/");
    } catch (err) {
      console.log(err.message);
      setError("Try signing up again");
    }
  }

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  function handleFileInput(e) {
    console.log(e.target.files);
    setPhoto(e.target.files[0]);
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <form autoComplete="off" className="forms" onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="username"
          value={state.username}
          onChange={handleChange}
          required
        />
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
        <input
          name="passwordConfirm"
          type="password"
          placeholder="password"
          value={state.passwordConfirm}
          onChange={handleChange}
          required
        />
        <input
          label="biography"
          name="biography"
          placeholder="What area of tech are you most interested in?"
          onChange={handleChange}
        />
        {/* <input
          type="file"
          name="photo"
          placeholder="upload image"
          onChange={handleFileInput}
        /> */}
        <button type="submit" className="button">
          Signup
        </button>
      </form>
    </div>
  );
}

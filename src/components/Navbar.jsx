import { Link } from "react-router-dom";

export default function Navbar({ user, logout }) {
  return (
    <nav>
      {user ? (
        <>
          <Link to="/" className="logo">
            Next in Tech with Dennelle
          </Link>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      )}
    </nav>
  );
}

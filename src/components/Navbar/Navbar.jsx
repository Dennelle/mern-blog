import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/" className="logo">
        Next in Tech with Dennelle
      </Link>
    </nav>
  );
}

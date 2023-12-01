import React from "react";
import { Link } from "react-router-dom";
import "../styling/App.css";

export default function Footer() {
  return (
    <div>
      <Link to="/admin" className="logo">
        create blog post
      </Link>
    </div>
  );
}

// ====== hooks ======
import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./styling/App.css";

//====== pages ======
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProfilePage from "./pages/ProfilePage";
import BlogFeedPage from "./pages/BlogFeedPage";

//====== components ======
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import BlogPost from "./components/BlogPost";

import userService from "./utils/userService";

//add sidebar with technews API

//====== functions ======
export default function App() {
  const [user, setUser] = useState(userService.getUser());

  function handleSignUporLogin() {
    setUser(userService.getUser());
  }

  function logout() {
    console.log("user logged out");
    userService.logout();
    setUser(null);
  }

  const publicRoutes = (
    <>
      <Navbar user={user} />
      <Routes>
        <Route
          path="/login"
          element={<LoginPage handleSignUporLogin={handleSignUporLogin} />}
        />
        <Route
          path="/signup"
          element={<SignupPage handleSignUporLogin={handleSignUporLogin} />}
        />
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );

  const protectedRoutes = (
    <>
      <Navbar user={user} logout={logout} />
      <Routes>
        <Route
          path="/"
          element={<BlogFeedPage loggedUser={user} handleLogout={logout} />}
        />
        <Route
          path="/:username"
          element={<ProfilePage loggedUser={user} handleLogout={logout} />}
        />
      </Routes>
    </>
  );

  return user ? protectedRoutes : publicRoutes;
}

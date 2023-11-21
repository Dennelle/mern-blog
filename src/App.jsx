// ====== hooks ======
import { Route, Routes } from "react-router-dom";
import "./App.css";

//====== pages ======
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

//====== components ======

//====== functions ======
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Tech Perspective Blog</h1>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/:username" element={<ProfilePage />} />
    </Routes>
  );
}

// ====== hooks ======
import { Route, Routes, Link } from "react-router-dom";
import "./styling/App.css";

//====== pages ======
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

//====== components ======
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Blogfeed from "./components/Blogfeed/Blogfeed";
//add blogfeed component

//add sidebar with technews API

//====== functions ======
export default function App() {
  return (
    <Routes>
      {/* //the index element is for the homepage */}
      <Route
        index
        element={
          <main>
            <Header />
            <Dashboard />
            <Blogfeed />
          </main>
        }
      />
      <Route path={"/login"} element={<LoginPage />} />
      <Route path={"/signup"} element={<SignupPage />} />
    </Routes>
  );
}

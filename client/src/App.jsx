import "./index.css";

import { Routes, Route } from "react-router-dom";
import.meta.env;
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";

import { Toaster } from "react-hot-toast";

import axios from "axios";

import { UserContextProvider } from "../context/userContext";
import Dashboard from "./pages/Dashboard";

axios.defaults.baseURL = "http://localhost:7000";
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <>
      <UserContextProvider>
        <Navbar />
        <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </UserContextProvider>
    </>
  );
};

export default App;

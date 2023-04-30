import { Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import UsersList from "./components/UsersList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Navbar from "./components/Navbar";
import Charts from "./components/Charts";
import LineGraph from "./components/LineGraph";

function App() {
  return (
    <div className="App my-5">
      <Navbar />

      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/linegraph" element={<LineGraph />} />
      </Routes>
    </div>
  );
}

export default App;

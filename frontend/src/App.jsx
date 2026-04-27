import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import FxList from "./pages/FxList";
import FxCreate from "./pages/FxCreate";
import FxDetails from "./pages/FxDetails";

export default function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };

  if (!user) {
    return (
      <Routes>
        <Route path="/*" element={<Login onLogin={setUser} />} />
      </Routes>
    );
  }

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <header style={{ marginBottom: 20 }}>
        <h2>FX Demo</h2>
        <div>
          Logged in as {user.name} ({user.email}){" "}
          <button onClick={handleLogout}>Logout</button>
        </div>
        <nav style={{ marginTop: 10 }}>
          <Link to="/fx">FX Requests</Link>{" "}
          | <Link to="/fx/new">New FX Request</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/fx" element={<FxList />} />
        <Route path="/fx/new" element={<FxCreate />} />
        <Route path="/fx/:id" element={<FxDetails />} />
        <Route path="*" element={<FxList />} />
      </Routes>
    </div>
  );
}
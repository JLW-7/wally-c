import React from "react";

export default function Sidebar({ setPage, page }) {
  const navStyle = (target) => ({
    width: "100%",
    background: page === target ? "#444" : "none",
    color: "#fff",
    border: "none",
    padding: 8,
    textAlign: "left",
    cursor: "pointer"
  });

  return (
    <nav style={{ width: 200, background: "#222", color: "#fff", padding: 16 }}>
      <h2>Wally Dashboard</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <button onClick={() => setPage("status")} style={navStyle("status")}>Device Status</button>
        </li>
        <li>
          <button onClick={() => setPage("logs")} style={navStyle("logs")}>Logs</button>
        </li>
        <li>
          <button onClick={() => setPage("config")} style={navStyle("config")}>Configuration</button>
        </li>
      </ul>
    </nav>
  );
}
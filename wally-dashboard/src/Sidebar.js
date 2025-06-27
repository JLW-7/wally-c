import React from "react";

export default function Sidebar({ setPage, page }) {
  return (
    <nav style={{ width: 200, background: "#222", color: "#fff", padding: 16 }}>
      <h2>Wally Dashboard</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <button onClick={() => setPage("status")} style={{ width: "100%", background: page === "status" ? "#444" : "none", color: "#fff", border: "none", padding: 8 }}>Device Status</button>
        </li>
        <li>
          <button onClick={() => setPage("logs")} style={{ width: "100%", background: page === "logs" ? "#444" : "none", color: "#fff", border: "none", padding: 8 }}>Logs</button>
        </li>
        <li>
          <button onClick={() => setPage("config")} style={{ width: "100%", background: page === "config" ? "#444" : "none", color: "#fff", border: "none", padding: 8 }}>Configuration</button>
        </li>
      </ul>
    </nav>
  );
}
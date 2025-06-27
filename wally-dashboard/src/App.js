import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./App.css";

function App() {
  const [page, setPage] = useState("status");

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar setPage={setPage} page={page} />
      <main style={{ flex: 1, padding: 24 }}>
        {page === "status" && <h2>Device Status Page (to be implemented)</h2>}
        {page === "logs" && <h2>Logs Page (to be implemented)</h2>}
        {page === "config" && <h2>Configuration Page (to be implemented)</h2>}
      </main>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import DeviceStatus from "./components/DeviceStatus";
import DeviceLogs from "./components/DeviceLogs";
import DeviceConfig from "./components/DeviceConfig";

export default function App() {
  const [page, setPage] = useState("status");

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar setPage={setPage} page={page} />
      <main style={{ flex: 1, padding: 24 }}>
        {page === "status" && <DeviceStatus />}
        {page === "logs" && <DeviceLogs />}
        {page === "config" && <DeviceConfig />}
      </main>
    </div>
  );
}
import React, { useEffect, useState } from "react";
import { mockStatus } from '../api/mock';

export default function DeviceStatus() {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/api/status")
      .then(res => res.json())
      .then(setStatus)
      .catch(() => setError("Failed to load device status."));
  }, []);

  if (error) return <div style={{ color: "red" }}>{error}</div>;
  if (!status) return <div>Loading device status...</div>;

  return (
    <div>
      <h3>Device Status</h3>
      <button onClick={() => setStatus(s => ({ ...s, online: !s.online }))}>
        Toggle Online Status
      </button>
      <p>Online: {status.online ? "Yes" : "No"}</p>
      <p>Battery: {status.battery}%</p>
      <p>Signal: {status.signal}</p>
      <p>Firmware: {status.firmware}</p>
    </div>
  );
}
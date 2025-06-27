import React, { useEffect, useState } from "react";

export default function DeviceStatus() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/status")
      .then(res => res.json())
      .then(setStatus)
      .catch(() => setStatus(null));
  }, []);

  if (!status) return <div>Loading device status...</div>;

  return (
    <div>
      <h3>Device Status</h3>
      <p>Online: {status.online ? "Yes" : "No"}</p>
      <p>Battery: {status.battery}%</p>
      <p>Signal: {status.signal}</p>
      <p>Firmware: {status.firmware}</p>
    </div>
  );
}
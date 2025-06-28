import React, { useEffect, useState } from "react";
import { mockStatus } from '../api/mock';

export default function DeviceStatus() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    setStatus(mockStatus); // For mock
    // Later: fetch('/api/status').then(...)
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
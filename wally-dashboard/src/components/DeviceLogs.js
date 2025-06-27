import React, { useEffect, useState } from "react";

export default function DeviceLogs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/logs")
      .then(res => res.json())
      .then(setLogs)
      .catch(() => setLogs([]));
  }, []);

  return (
    <div>
      <h3>Device Logs</h3>
      <ul>
        {logs.map((log, idx) => (
          <li key={idx}>
            <strong>{log.time}</strong>: {log.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
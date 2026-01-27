import React, { useEffect, useState } from "react";

export default function DeviceConfig() {
  const [config, setConfig] = useState({ wifi: "", language: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/config")
      .then(res => res.json())
      .then(setConfig)
      .catch(() => setConfig({ wifi: "", language: "" }));
  }, []);

  function handleChange(e) {
    setConfig({ ...config, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/api/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(config),
    })
      .then(res => res.json())
      .then(data => setMessage(data.success ? "Configuration updated!" : "Failed to update."))
      .catch(() => setMessage("Failed to update."));
  }

  return (
    <div>
      <h3>Device Configuration</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Wi-Fi SSID: </label>
          <input name="wifi" value={config.wifi} onChange={handleChange} />
        </div>
        <div>
          <label>Language: </label>
          <select name="language" value={config.language} onChange={handleChange}>
            <option value="en">English</option>
            <option value="zh">中文</option>
          </select>
        </div>
        <button type="submit">Save</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
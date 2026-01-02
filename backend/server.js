const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// Device status endpoint
app.get('/api/status', (req, res) => {
  res.json({
    online: true,
    battery: 85,
    signal: "Excellent",
    firmware: "2.1.4"
  });
});

// Logs endpoint
app.get('/api/logs', (req, res) => {
  res.json([
    { time: "2023-05-15T10:30:00Z", message: "System started" },
    { time: "2023-05-15T10:31:00Z", message: "WiFi connected" }
  ]);
});

// Config endpoints
app.get('/api/config', (req, res) => {
  res.json({ wifi: "HomeWiFi", language: "en" });
});

app.post('/api/config', (req, res) => {
  // Here you would save the config
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Backend API running on http://localhost:${PORT}`);
});
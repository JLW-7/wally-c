export const mockStatus = {
  online: true,
  battery: 85,
  signal: "Excellent",
  firmware: "2.1.4"
};

export const fetchLogs = () => Promise.resolve([
  { time: "2023-05-15T10:30:00Z", message: "System started" },
  { time: "2023-05-15T10:31:00Z", message: "WiFi connected" }
]);
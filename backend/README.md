# Wally Dashboard Backend (Node.js)

This is a simple Express backend to support the Wally React dashboard.

## Endpoints

- `GET /api/status` — Returns device status
- `GET /api/logs` — Returns device logs
- `GET /api/config` — Returns device configuration
- `POST /api/config` — Accepts configuration updates

## Usage

```bash
cd backend
npm install
node server.js
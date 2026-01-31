Deployment - Faru Gateway (Core + Console)

Quick start
- Requirements: Docker, Docker Compose
- From this folder, build and run:

```bash
docker compose up -d --build
```

PM2 deployment
--------------

- Requirements: Node.js, npm, pm2, and local MongoDB
- From this folder:

```bash
./run-pm2.sh
```

Services
- MongoDB: internal only
- Core API: https://localhost:17070 (self-signed cert)
- Core Router HTTPS: https://localhost:15000
- Core Router HTTP: http://localhost:15001
- Console: http://localhost:9000

Default login
- Username: root@openhim.org
- Password: openhim-password

Notes
- Console config is bind-mounted from ../faru-gateway-ui/app/config/default.json
- It targets the Core at protocol=https and port=17070.

Common commands
```bash
# Stop and remove
docker compose down

# See service status
docker compose ps

# Tail logs
docker compose logs -f faru-gateway-core
docker compose logs -f faru-gateway-console
```

Troubleshooting
- If the browser blocks login due to a self-signed certificate, open:
  https://localhost:17070/authenticate/root@openhim.org
  Click “Advanced” → “Proceed”, then log in via the Console.



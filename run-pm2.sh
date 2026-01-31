#!/usr/bin/env bash

set -e

# Always run from this script's directory
cd "$(dirname "$0")"

echo "Starting Faru gateway stack with PM2 (env=production)..."

# Start all apps defined in the ecosystem file using the production env
pm2 start ecosystem.config.js --env production

# Optional: save the current PM2 process list for startup (if pm2 startup is configured)
pm2 save || true

echo "PM2 processes:"
pm2 ls



#!/bin/bash

# Kill all processes on exit
trap "kill 0" EXIT

echo "Cleaning up ports..."

# Kill anything on 3500 and 3000
lsof -ti:3500 | xargs kill -9 2>/dev/null
lsof -ti:3000 | xargs kill -9 2>/dev/null

echo "Starting backend (3500)..."
(cd server && npm start) &

echo "Starting frontend (3000)..."
(cd my-app && npm run dev) &

wait
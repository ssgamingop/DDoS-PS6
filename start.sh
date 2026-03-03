#!/bin/bash

# Kill background processes on exit
trap 'kill 0' SIGINT

echo "Starting Backend (FastAPI)..."
uvicorn backend.api:app --reload &
BACKEND_PID=$!

echo "Starting Frontend (Next.js)..."
cd frontend
npm run dev &
FRONTEND_PID=$!

echo "Both environments are spinning up!"
echo "Backend: http://localhost:8000"
echo "Frontend: http://localhost:3000"

wait

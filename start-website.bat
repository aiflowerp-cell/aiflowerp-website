@echo off
setlocal

cd /d D:\projects\ai_flow_erp_website

echo ==========================================
echo     AI FLOW MAIN WEBSITE PRODUCTION SERVER
echo ==========================================
echo.
echo Project: D:\projects\ai_flow_erp_website
echo Port:    3000
echo Mode:    Production (npm run start)
echo.

echo Starting Next.js production server...
start "AI FLOW Website (Port 3000)" cmd /k "cd /d D:\projects\ai_flow_erp_website && npm run start"

echo.
echo AI FLOW Website production server launched (http://localhost:3000).
echo.
exit

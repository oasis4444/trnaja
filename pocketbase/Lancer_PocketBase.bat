@echo off
cd /d "%~dp0"
echo Demarrage du serveur TR Naja... ne fermez pas cette fenetre.
pocketbase.exe serve --http=0.0.0.0:8090
pause

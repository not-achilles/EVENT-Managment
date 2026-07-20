@echo off
title Commit & Push Now - EVENT-Managment
echo Staging, committing, and pushing changes to GitHub...
python "%~dp0auto_commit.py" --once
pause

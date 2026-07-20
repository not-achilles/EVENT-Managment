@echo off
title Auto-Commit Watcher - EVENT-Managment
echo Starting Git Auto-Commit Watcher...
python "%~dp0auto_commit.py" --watch --interval 30
pause

# EVENT-Managment

Modern Event Management System with automated Git auto-commit watcher and instant sync script.

## 📂 Project Location
`C:\Users\anmol\.gemini\antigravity\scratch\EVENT-Managment`

## 🔗 Connected Git Repository
- **Remote**: `https://github.com/not-achilles/EVENT-Managment.git`
- **Branch**: `main`

---

## 🤖 Git Auto-Commit & Sync Features

This project includes automated tooling to continuously monitor, stage, commit, and push your changes to GitHub.

### 1. Run Continuous Auto-Commit Watcher
Monitors file changes every 30 seconds, creates timestamped commit messages, and pushes to `origin main`:
```bash
python auto_commit.py --watch
```
*(Or double-click `auto_commit.bat` on Windows)*

### 2. Instant One-Shot Commit & Push
Stage, commit, and push changes immediately:
```bash
python auto_commit.py --once
```
Or with a custom message:
```bash
python auto_commit.py -m "Add new event filter feature"
```
*(Or double-click `commit_now.bat` on Windows)*

### 3. Check Git Status
```bash
python auto_commit.py --status
```

---

## 🌐 Web Application Overview
Open `index.html` in your browser to view the Event Management Dashboard.
- **Event Creation & Management**: Add, search, filter, and sort events.
- **RSVP & Ticket Booking**: Real-time capacity calculation & ticket generation.
- **Persistent Storage**: Saves all state in browser local storage.
- **Theme Support**: Dark mode & light mode toggle.

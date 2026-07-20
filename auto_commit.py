"""
Auto-Commit & Sync Utility for EVENT-Managment Repository
---------------------------------------------------------
Features:
- Watch Mode: Continuously monitors project files and automatically stages, commits, and pushes changes.
- One-Shot Mode: Immediately stages, commits, and pushes with a custom or auto-generated message.
- Status Check: Displays repository state and pending changes.
"""

import argparse
import os
import subprocess
import sys
import time
from datetime import datetime

# Set console encoding to UTF-8 on Windows
if sys.platform == 'win32':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
        sys.stderr.reconfigure(encoding='utf-8')
    except Exception:
        pass

GIT_EXE = r"C:\Program Files\Git\cmd\git.exe"
if not os.path.exists(GIT_EXE):
    GIT_EXE = "git"  # fallback to PATH search

REPO_DIR = os.path.dirname(os.path.abspath(__file__))

def run_git(args, cwd=REPO_DIR):
    """Executes a git command and returns stdout, stderr, and exit code."""
    cmd = [GIT_EXE] + args
    try:
        res = subprocess.run(cmd, cwd=cwd, capture_output=True, text=True, check=False)
        return res.returncode, res.stdout.strip(), res.stderr.strip()
    except Exception as e:
        return 1, "", str(e)

def get_changed_files():
    """Returns lists of modified, untracked, and deleted files."""
    code, out, _ = run_git(["status", "--porcelain"])
    if code != 0 or not out:
        return []
    
    files = []
    for line in out.splitlines():
        if line.strip():
            status = line[:2].strip()
            filename = line[3:].strip()
            files.append((status, filename))
    return files

def generate_commit_message(files):
    """Generates a descriptive commit message based on changed files."""
    if not files:
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        return f"auto-commit: update repository [{timestamp}]"
    
    file_names = [f[1] for f in files]
    if len(file_names) <= 3:
        summary = ", ".join(file_names)
    else:
        summary = f"{', '.join(file_names[:3])} and {len(file_names) - 3} other files"
    
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    return f"auto-commit: {summary} [{timestamp}]"

def do_commit_and_push(custom_message=None, branch="main"):
    """Stages all changes, commits, and pushes to remote."""
    files = get_changed_files()
    if not files:
        print("ℹ️ No changes detected in repository.")
        return False

    print(f"📌 Found {len(files)} file(s) changed:")
    for status, fname in files:
        print(f"   - [{status or 'M'}] {fname}")

    # Stage all changes
    print("⏳ Staging files (git add .)...")
    code, _, err = run_git(["add", "."])
    if code != 0:
        print(f"❌ Error staging files: {err}")
        return False

    # Commit
    msg = custom_message if custom_message else generate_commit_message(files)
    print(f"📝 Committing: '{msg}'...")
    code, out, err = run_git(["commit", "-m", msg])
    if code != 0:
        print(f"❌ Commit failed: {err or out}")
        return False
    print(f"✅ Committed successfully: {out.splitlines()[0] if out else ''}")

    # Push
    print(f"🚀 Pushing to remote branch '{branch}'...")
    code, out, err = run_git(["push", "-u", "origin", branch])
    if code != 0:
        print(f"⚠️ Push notice: {err or out}")
        if "could not read Username" in err or "Authentication failed" in err or "dialog" in err:
            print("\n🔐 GITHUB AUTHENTICATION NEEDED:")
            print("1. Open your terminal in this directory and run: git push -u origin main")
            print("2. Or set a Personal Access Token (PAT):")
            print("   git remote set-url origin https://<YOUR_GITHUB_TOKEN>@github.com/not-achilles/EVENT-Managment.git")
            print("3. Or use SSH:")
            print("   git remote set-url origin git@github.com:not-achilles/EVENT-Managment.git\n")
        elif "up-to-date" in err or "up-to-date" in out:
            print("✅ Remote is up to date.")
            return True
        return True  # Commit succeeded locally
    else:
        print("🎉 Successfully pushed to GitHub!")
        return True

def print_status():
    """Prints status of repository."""
    code, branch, _ = run_git(["rev-parse", "--abbrev-ref", "HEAD"])
    branch_name = branch if code == 0 else "unknown"
    print(f"🌿 Current Branch: {branch_name}")
    
    files = get_changed_files()
    if not files:
        print("✅ Working tree clean (No uncommitted changes).")
    else:
        print(f"⚠️ {len(files)} uncommitted file(s):")
        for status, fname in files:
            print(f"   [{status or 'M'}] {fname}")

def watch_mode(interval=30, branch="main"):
    """Monitors repository for changes and auto-commits periodically."""
    print("=" * 60)
    print("🤖 AUTO-COMMIT WATCHER STARTED")
    print(f"⏱️  Checking interval: every {interval} seconds")
    print(f"🌿 Target Branch: {branch}")
    print(f"📂 Monitored Path: {REPO_DIR}")
    print("Press Ctrl+C to stop the auto-commit watcher.")
    print("=" * 60)
    
    try:
        while True:
            files = get_changed_files()
            if files:
                print(f"\n[{datetime.now().strftime('%H:%M:%S')}] Changes detected! Auto-committing...")
                do_commit_and_push(branch=branch)
            else:
                sys.stdout.write(f"\r[{datetime.now().strftime('%H:%M:%S')}] Monitoring... Tree clean.")
                sys.stdout.flush()
            time.sleep(interval)
    except KeyboardInterrupt:
        print("\n\n🛑 Auto-commit watcher stopped by user.")

def main():
    parser = argparse.ArgumentParser(description="Git Auto-Commit & Sync Tool for EVENT-Managment")
    parser.add_argument("-w", "--watch", action="store_true", help="Run in continuous watch mode")
    parser.add_argument("-o", "--once", action="store_true", help="Stage, commit, and push once immediately")
    parser.add_argument("-m", "--message", type=str, help="Custom commit message for --once mode")
    parser.add_argument("-i", "--interval", type=int, default=30, help="Watch mode check interval in seconds (default: 30)")
    parser.add_argument("-b", "--branch", type=str, default="main", help="Target git branch (default: main)")
    parser.add_argument("-s", "--status", action="store_true", help="Display repository status")

    args = parser.parse_args()

    if args.status:
        print_status()
    elif args.watch:
        watch_mode(interval=args.interval, branch=args.branch)
    else:
        # Default behavior: run once
        do_commit_and_push(custom_message=args.message, branch=args.branch)

if __name__ == "__main__":
    main()

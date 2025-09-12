#!/usr/bin/env bash
# ---------------------------------------------------
# Pre-commit hook: Biome.js format + TypeScript check
# Auto-detect Node environment (system, fnm, nvm)
# Auto-detect package manager: bun, pnpm, yarn, npm
# Works on macOS/Linux/Windows (Git Bash / WSL)
# Format staged files and prevent commit on errors
# ---------------------------------------------------

set -e  # Exit immediately if any command fails

# 0️⃣ Ensure dependencies installed
if [ ! -d "node_modules" ]; then
  echo "❌ node_modules not found. Run 'npm install' (or pnpm/yarn/bun install) first."
  exit 1
fi

# 1️⃣ Detect Node
if command -v fnm >/dev/null 2>&1; then
  export PATH="$HOME/.fnm:$PATH"
  eval "$(fnm env --use-on-cd)"
elif [ -s "$HOME/.nvm/nvm.sh" ]; then
  . "$HOME/.nvm/nvm.sh"
  nvm use >/dev/null || true
elif ! command -v node >/dev/null 2>&1; then
  echo "❌ Node.js not found. Install Node, fnm, or nvm."
  exit 1
fi

# 2️⃣ Detect package manager
if command -v bun >/dev/null 2>&1; then
  PM="bun"
elif [ -f "pnpm-lock.yaml" ]; then
  PM="pnpm"
elif [ -f "yarn.lock" ]; then
  PM="yarn"
else
  PM="npm"
fi

# Helper function to run a script via detected package manager
run_pm() {
  local SCRIPT=$1
  shift
  case "$PM" in
    bun) bun run "$SCRIPT" "$@" ;;
    yarn) yarn "$SCRIPT" "$@" ;;
    pnpm) pnpm run "$SCRIPT" -- "$@" ;;
    npm) npm run "$SCRIPT" -- "$@" ;;
  esac
}

# 3️⃣ Run Biome format/lint
run_pm lint:fix "$@" || { echo "❌ Commit aborted due to Biome lint errors"; exit 1; }

# 4️⃣ Run TypeScript check
run_pm typecheck || { echo "❌ TypeScript errors detected"; exit 1; }

# 5️⃣ Re-stage modified files
if [ "$#" -gt 0 ]; then
  git add "$@"
fi

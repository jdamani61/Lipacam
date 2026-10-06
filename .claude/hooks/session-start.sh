#!/bin/bash
set -euo pipefail

# Remote (cloud) sessions only
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

cd "${CLAUDE_PROJECT_DIR:-.}"

# Project dependencies
npm install

# OpenClaude CLI (idempotent: skipped if already installed)
if ! command -v openclaude >/dev/null 2>&1; then
  npm install -g @gitlawb/openclaude@latest
fi

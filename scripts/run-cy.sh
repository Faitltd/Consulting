#!/usr/bin/env bash
set -euo pipefail

PORT=${PORT:-4173}
PREVIEW_HOST=${PREVIEW_HOST:-0.0.0.0}
LOCAL_HOST=${LOCAL_HOST:-127.0.0.1}
BASE_URL=${BASE_URL:-http://host.docker.internal:${PORT}}

if ! command -v docker >/dev/null 2>&1; then
  echo "Docker is required to run Cypress in the included container. Please install Docker and retry." >&2
  exit 1
fi

echo "Building site..."
npm run build >/tmp/fait_build.log 2>&1

echo "Starting preview server on http://${PREVIEW_HOST}:${PORT} ..."
npm run preview -- --host "${PREVIEW_HOST}" --port "${PORT}" >/tmp/fait_preview.log 2>&1 &
PREVIEW_PID=$!

cleanup() {
  echo "Stopping preview server (pid ${PREVIEW_PID})"
  kill "${PREVIEW_PID}" >/dev/null 2>&1 || true
}
trap cleanup EXIT

echo "Waiting for preview server..."
for i in {1..30}; do
  if curl -fsS "http://${LOCAL_HOST}:${PORT}" >/dev/null 2>&1; then
    echo "Preview server is up."
    break
  fi
  sleep 1
done

if ! curl -fsS "http://${LOCAL_HOST}:${PORT}" >/dev/null 2>&1; then
  echo "Preview server did not start. Log output:"
  tail -n 50 /tmp/fait_preview.log || true
  exit 1
fi

echo "Running Cypress in Docker (baseUrl ${BASE_URL})..."
BROWSER=${BROWSER:-electron}
docker run --rm \
  -e CYPRESS_baseUrl="${BASE_URL}" \
  -e CYPRESS_BROWSER="${BROWSER}" \
  -v "$PWD":/e2e \
  -w /e2e \
  cypress/included:14.0.1 \
  --browser "${BROWSER}" "$@"

#!/bin/bash
# Exit immediately if a command exits with a non-zero status
set -e

# Accept parameters from environment variables or command-line arguments
PROJECT_FOLDER="${PROJECT_FOLDER:-$1}"
IMAGE_NAME="${IMAGE_NAME:-$2}"
DOCKERFILE_PATH="${DOCKERFILE_PATH:-$3}"

# Check if required parameters are provided
if [ -z "$PROJECT_FOLDER" ] || [ -z "$IMAGE_NAME" ] || [ -z "$DOCKERFILE_PATH" ]; then
    echo "Usage: PROJECT_FOLDER=<folder> IMAGE_NAME=<name> DOCKERFILE_PATH=<path> $0"
    echo "Or pass as arguments: $0 <project_folder> <image_name> <dockerfile_path>"
    exit 1
fi

# Load environment variables from root .env if it exists
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
fi

# Change to the project folder
cd "$PROJECT_FOLDER"

# Load environment variables from the project folder .env if it exists
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
fi

# Load environment variables from the Dockerfile path .env if it exists
if [ -f "$DOCKERFILE_PATH/.env" ]; then
    export $(grep -v '^#' "$DOCKERFILE_PATH/.env" | xargs)
fi

# Determine version
VERSION_VAR="${IMAGE_NAME^^}_VERSION"   # e.g., FRONTEND_VERSION
VERSION="${!VERSION_VAR}"

if [ -z "$VERSION" ]; then
    echo "Version for image '$IMAGE_NAME' not found. Define $VERSION_VAR in your .env"
    exit 1
fi

# Build the Docker image
docker build -t "${CI_REGISTRY_IMAGE}/${IMAGE_NAME}:${VERSION}" -f "${DOCKERFILE_PATH}/Dockerfile" "$DOCKERFILE_PATH"

# Push the Docker image
docker push "${CI_REGISTRY_IMAGE}/${IMAGE_NAME}:${VERSION}"

echo "Docker image ${CI_REGISTRY_IMAGE}/${IMAGE_NAME}:${VERSION} built and pushed successfully."

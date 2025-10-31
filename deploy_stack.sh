#!/bin/bash
set -e

# Check if a name argument was provided
if [ $# -eq 0 ]; then
    echo "Usage: $0 <NAME> [BASE_PATH] [ADDITIONAL_ENVS]"
    exit 1
fi

NAME="$1"
BASE_PATH="${2:-.}"           # Default to current directory if not provided
ADDITIONAL_ENVS="$3"

DOCKER_COMPOSE_FILE="${BASE_PATH}/${NAME}/docker-compose.yml"
PROJECT_ENV_FILE="${BASE_PATH}/${NAME}/.env"

# Ensure files exist
if [ ! -f "$DOCKER_COMPOSE_FILE" ]; then
    echo "Error: $DOCKER_COMPOSE_FILE does not exist."
    exit 1
fi

if [ ! -f "$PROJECT_ENV_FILE" ]; then
    echo "Warning: $PROJECT_ENV_FILE does not exist. Continuing..."
fi

# Run parse_compose_envs.sh safely
./parse_compose_envs.sh "$DOCKER_COMPOSE_FILE" ".env" "$PROJECT_ENV_FILE" "$ADDITIONAL_ENVS"
echo ${VERSION}
# Deploy the stack
COMPOSE_PROD_FILE="${BASE_PATH}/${NAME}/docker-compose.prod.yml"
if [ -f "$COMPOSE_PROD_FILE" ]; then
    docker stack deploy "resume-${NAME}" --compose-file "$COMPOSE_PROD_FILE"
    rm "$COMPOSE_PROD_FILE"
else
    echo "Error: $COMPOSE_PROD_FILE not found."
    exit 1
fi

echo "Actions completed for ${NAME}"

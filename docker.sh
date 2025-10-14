#!/bin/bash

# Docker management script for devportfolio
# Usage: ./docker.sh [command] [options]

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Default values
PORT=${PORT:-4321}
HOST=${HOST:-0.0.0.0}
ALLOWED_HOSTS=${ALLOWED_HOSTS:-localhost,mrahman.xyz}
CONTAINER_NAME="devportfolio"

# Functions
print_usage() {
    echo -e "${BLUE}Usage: $0 [command] [options]${NC}"
    echo ""
    echo "Commands:"
    echo "  build                    Build the Docker image"
    echo "  run [port]               Run container with optional port (default: 4321)"
    echo "  up                       Start with docker-compose"
    echo "  down                     Stop docker-compose"
    echo "  restart                  Restart docker-compose"
    echo "  logs                     Show logs"
    echo "  shell                    Access container shell"
    echo "  clean                    Remove containers and images"
    echo "  help                     Show this help"
    echo ""
    echo "Environment Variables:"
    echo "  PORT                     Server port (default: 4321)"
    echo "  HOST                     Server host (default: 0.0.0.0)"
    echo "  ALLOWED_HOSTS            Comma-separated allowed hosts"
    echo ""
    echo "Examples:"
    echo "  $0 build"
    echo "  $0 run 8080"
    echo "  PORT=8080 ALLOWED_HOSTS=localhost,mydomain.com $0 up"
}

build_image() {
    echo -e "${GREEN}Building Docker image...${NC}"
    docker build -t $CONTAINER_NAME .
    echo -e "${GREEN}Build completed!${NC}"
}

run_container() {
    local port=${1:-$PORT}
    echo -e "${GREEN}Running container on port $port...${NC}"
    docker run -d \
        --name $CONTAINER_NAME \
        -p $port:$port \
        -e PORT=$port \
        -e HOST=$HOST \
        -e ALLOWED_HOSTS="$ALLOWED_HOSTS" \
        $CONTAINER_NAME
    echo -e "${GREEN}Container started! Access at http://localhost:$port${NC}"
}

docker_compose_up() {
    echo -e "${GREEN}Starting with docker-compose...${NC}"
    docker-compose up -d
    echo -e "${GREEN}Services started!${NC}"
}

docker_compose_down() {
    echo -e "${YELLOW}Stopping docker-compose...${NC}"
    docker-compose down
    echo -e "${GREEN}Services stopped!${NC}"
}

docker_compose_restart() {
    echo -e "${YELLOW}Restarting docker-compose...${NC}"
    docker-compose restart
    echo -e "${GREEN}Services restarted!${NC}"
}

show_logs() {
    echo -e "${BLUE}Showing logs...${NC}"
    docker-compose logs -f
}

access_shell() {
    echo -e "${BLUE}Accessing container shell...${NC}"
    docker exec -it $CONTAINER_NAME /bin/sh
}

clean_docker() {
    echo -e "${RED}Cleaning up Docker resources...${NC}"
    docker-compose down --volumes --remove-orphans
    docker rmi $CONTAINER_NAME 2>/dev/null || true
    docker system prune -f
    echo -e "${GREEN}Cleanup completed!${NC}"
}

# Main script logic
case "${1:-help}" in
    "build")
        build_image
        ;;
    "run")
        run_container $2
        ;;
    "up")
        docker_compose_up
        ;;
    "down")
        docker_compose_down
        ;;
    "restart")
        docker_compose_restart
        ;;
    "logs")
        show_logs
        ;;
    "shell")
        access_shell
        ;;
    "clean")
        clean_docker
        ;;
    "help"|*)
        print_usage
        ;;
esac

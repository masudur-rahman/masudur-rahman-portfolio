# Docker Setup for DevPortfolio

This project has been dockerized with configurable ports and allowed hosts support. You can run the application in Docker using either Docker Compose or direct Docker commands.

## Quick Start

### Using Docker Compose (Recommended)

1. **Copy environment configuration:**
   ```bash
   cp .env.example .env
   ```

2. **Start the application:**
   ```bash
   docker-compose up -d
   ```

3. **Access the application:**
   - Default: http://localhost:4321
   - Or use your configured port from `.env`

### Using Docker Script (Easy Management)

1. **Build the image:**
   ```bash
   ./docker.sh build
   ```

2. **Run with custom port:**
   ```bash
   ./docker.sh run 8080
   ```

3. **Start with docker-compose:**
   ```bash
   ./docker.sh up
   ```

## Configuration

### Environment Variables

Create a `.env` file based on `.env.example`:

```bash
# Server Configuration
PORT=4321                    # Port for the server
HOST=0.0.0.0                # Host address (0.0.0.0 for external access)
ALLOWED_HOSTS=localhost,mrahman.xyz  # Comma-separated allowed hosts
NODE_ENV=production          # Node environment
```

### Port Configuration

You can change the port in several ways:

1. **Environment file:**
   ```bash
   echo "PORT=8080" >> .env
   ```

2. **Command line:**
   ```bash
   PORT=8080 docker-compose up -d
   ```

3. **Docker run:**
   ```bash
   docker run -p 8080:8080 -e PORT=8080 devportfolio
   ```

### Allowed Hosts Configuration

Configure allowed hosts for security:

```bash
# For local development
ALLOWED_HOSTS=localhost,127.0.0.1

# For production
ALLOWED_HOSTS=yourdomain.com,www.yourdomain.com

# For Docker with custom domain
ALLOWED_HOSTS=localhost,yourdomain.com,container-name
```

## Available Commands

### Docker Compose Commands

```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f

# Restart services
docker-compose restart

# Rebuild and start
docker-compose up -d --build
```

### Docker Script Commands

```bash
./docker.sh build          # Build Docker image
./docker.sh run [port]     # Run container with optional port
./docker.sh up             # Start with docker-compose
./docker.sh down           # Stop docker-compose
./docker.sh restart        # Restart docker-compose
./docker.sh logs           # Show logs
./docker.sh shell          # Access container shell
./docker.sh clean          # Remove containers and images
./docker.sh help           # Show help
```

### NPM Scripts

```bash
npm run docker:build       # Build Docker image
npm run docker:run         # Run container
npm run docker:up          # Start with docker-compose
npm run docker:down        # Stop docker-compose
npm run docker:logs        # Show logs
npm run docker:restart     # Restart services
```

## Production Deployment

### Using Docker Compose

1. **Configure production environment:**
   ```bash
   cp .env.example .env
   # Edit .env with production values
   ```

2. **Deploy:**
   ```bash
   docker-compose up -d
   ```

### Using Docker Run

```bash
# Build image
docker build -t devportfolio .

# Run with production settings
docker run -d \
  --name devportfolio \
  -p 80:80 \
  -e PORT=80 \
  -e HOST=0.0.0.0 \
  -e ALLOWED_HOSTS=yourdomain.com,www.yourdomain.com \
  devportfolio
```

### Using Reverse Proxy (Nginx)

Example Nginx configuration:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    
    location / {
        proxy_pass http://localhost:4321;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## Troubleshooting

### Common Issues

1. **Port already in use:**
   ```bash
   # Check what's using the port
   lsof -i :4321
   
   # Use a different port
   PORT=8080 docker-compose up -d
   ```

2. **Permission denied:**
   ```bash
   # Make docker script executable
   chmod +x docker.sh
   ```

3. **Container won't start:**
   ```bash
   # Check logs
   docker-compose logs
   
   # Check container status
   docker ps -a
   ```

4. **Build fails:**
   ```bash
   # Clean Docker cache
   docker system prune -a
   
   # Rebuild
   docker-compose up -d --build
   ```

### Health Checks

The container includes health checks. Check status:

```bash
docker ps
# Look for "healthy" status

# Manual health check
curl http://localhost:4321
```

## Security Considerations

1. **Allowed Hosts:** Always configure `ALLOWED_HOSTS` in production
2. **Network:** Use Docker networks for multi-container setups
3. **Secrets:** Don't commit `.env` files with sensitive data
4. **Updates:** Regularly update base images and dependencies

## Development vs Production

### Development
- Use `localhost` in `ALLOWED_HOSTS`
- Enable hot reload (if needed)
- Use development environment variables

### Production
- Use your actual domain in `ALLOWED_HOSTS`
- Set `NODE_ENV=production`
- Use reverse proxy for SSL termination
- Monitor logs and health checks

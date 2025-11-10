#!/bin/bash

# Portfolio Production Deployment Script
# This script automates the entire production deployment

set -e

PROJECT_NAME="portfolio"

echo "🚀 Starting ${PROJECT_NAME} production deployment..."
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to check prerequisites
check_prerequisites() {
    echo -e "${BLUE}🔍 Checking deployment prerequisites...${NC}"
    
    # Check if we're in the right directory
    if [ ! -f "docker-compose.prod.yml" ]; then
        echo -e "${RED}❌ Error: docker-compose.prod.yml not found!${NC}"
        echo "Make sure you're running this script from the project root directory"
        exit 1
    fi
    
    # Check if package.json exists for app build
    if [ ! -f "package.json" ]; then
        echo -e "${RED}❌ Error: package.json not found!${NC}"
        echo "Cannot build app without package.json"
        exit 1
    fi
    
    # Check if Dockerfile exists
    if [ ! -f "docker/client/Dockerfile" ] || [ ! -f "docker/server/Dockerfile" ]; then
        echo -e "${RED}❌ Error: Dockerfiles not found in packages!${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}✅ All prerequisites checked${NC}"
}

# Main deployment function
deploy_production() {
    echo -e "${BLUE}📦 Pulling latest changes from repository...${NC}"
    git pull origin main

    echo -e "${BLUE}📦 Installing workspace dependencies...${NC}"
    npm ci --include-workspace-root
    
    echo -e "${BLUE}🔨 Building production app...${NC}"
    npm run build
    
    echo -e "${BLUE}🐳 Stopping existing containers...${NC}"
    docker-compose -f docker-compose.prod.yml down
    
    echo -e "${BLUE}🏗️  Building new production containers...${NC}"
    docker-compose -f docker-compose.prod.yml build --no-cache
    
    echo -e "${BLUE}🚀 Starting production containers...${NC}"
    docker-compose -f docker-compose.prod.yml up -d
    
    echo -e "${BLUE}🧹 Cleaning up unused Docker images...${NC}"
    docker image prune -f
    
    echo -e "${GREEN}✅ All containers started successfully${NC}"
}

# Function to show deployment summary
show_deployment_summary() {
    echo ""
    echo "🎉 ${PROJECT_NAME} production deployment complete!"
    echo ""
    echo "📝 Deployment Summary:"
    echo "   • Git repository updated to latest main branch"
    echo "   • Production app built"
    echo "   • Postgres database is running"
    echo "   • Nginx reverse proxy is running"
    echo "   • All containers were re-built and are now running in production mode"
    echo ""
    echo "🌐 Your site is now live!"
    echo "💡 Tip: Check 'docker-compose -f docker-compose.prod.yml ps' to verify all services"
    echo ""
}

# Main execution
main() {
    # Check prerequisites
    check_prerequisites
    echo ""
    
    # Deploy to production
    deploy_production
    echo ""
    
    # Show summary
    show_deployment_summary
}

# Run the main function
main "$@"
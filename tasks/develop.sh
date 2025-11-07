#!/bin/bash

# Portfolio Development Setup Script
# This script automates the entire development environment setup

PROJECT_PATH="$HOME/Documents/Projects/portfolio"
PROJECT_NAME="portfolio"

echo "🚀 Starting ${PROJECT_NAME} development environment setup..."
echo ""

# Check if we're already in the project directory, if not, navigate there
check_current_directory() {
    echo "🔍 Checking current directory..."

    CURRENT_DIR=$(pwd)
    if [[ "$CURRENT_DIR" != "$PROJECT_PATH" ]]; then
        echo "📁 Navigating to project directory..."
        cd "$PROJECT_PATH" || {
            echo "❌ Error: Could not navigate to $PROJECT_PATH"
            exit 1
        }
        echo "✅ Now in: $(pwd)"
    else
        echo "✅ Already in project directory: $(pwd)"
    fi
}

# Function to check if required tools are available
check_dependencies() {
    echo "🔍 Checking dependencies..."

    # Check if we're in the right directory
    if [ ! -d "$PROJECT_PATH" ]; then
        echo "❌ Error: Project directory not found at $PROJECT_PATH"
        exit 1
    fi

    # Check if package.json exists
    if [ ! -f "$PROJECT_PATH/package.json" ]; then
        echo "❌ Error: package.json not found in project directory"
        exit 1
    fi

    # Check if docker-compose.yml exists
    if [ ! -f "$PROJECT_PATH/docker-compose.yml" ]; then
        echo "❌ Error: docker-compose.yml not found in project directory"
        exit 1
    fi

    # Check if node_modules exists (dependencies installed)
    if [ ! -d "$PROJECT_PATH/node_modules" ]; then
        echo "⚠️  Warning: node_modules not found. Installing dependencies..."
        cd "$PROJECT_PATH"
        npm install
    fi

    echo "✅ All dependencies checked"
}

# Function to start Docker containers
start_docker_containers() {
    # Check if Docker is running
    if ! docker info > /dev/null 2>&1; then
        echo "❌ Error: Docker is not running. Please start Docker Desktop first."
        echo "💡 Tip: Open Docker Desktop from Applications folder"
        exit 1
    fi

    echo "📦 Stopping any existing containers..."
    docker-compose -f docker-compose.yml down
    
    echo "🐳 Building and starting fresh containers..."
    # Start containers in background
    docker-compose -f docker-compose.yml up --build -d
    
    # Wait a moment for containers to start
    echo "⏳ Waiting for containers to start..."
    sleep 5
    
    # Check container status
    if docker-compose -f docker-compose.yml ps | grep -q "Up"; then
        echo "✅ Docker containers started successfully!"
    else
        echo "⚠️  Warning: Some containers may not be running. Check docker-compose ps"
    fi
}

# Function to open Brave browser with client port
open_browser() {
    echo "📱 Opening Brave browser..."

    # Client port (Vite default)
    CLIENT_PORT=5173

    # Open Brave with just the client tab
    osascript <<EOF
    tell application "Brave Browser"
        if (count of windows) > 0 then
            set portfolioWindow to window 1
            tell portfolioWindow
                set URL of active tab to "http://localhost:${CLIENT_PORT}"
            end tell
        else
            set portfolioWindow to make new window
            tell portfolioWindow
                set URL of active tab to "http://localhost:${CLIENT_PORT}"
            end tell
        end if
        activate
    end tell
EOF

    echo "✅ Brave window opened with client tab (${CLIENT_PORT})"
}

# Function to setup additional iTerm tabs in current window
setup_iterm() {
    echo "💻 Adding 1 new tab to current iTerm window..."

    osascript <<EOF
    tell application "iTerm"
        activate
        
        -- Get the current window (where script is running)
        set currentWindow to current window
        
        -- Set name for current tab
        tell current session of currentWindow
            set name to "dev-setup"
        end tell

        -- Second tab: Docker Development
        tell currentWindow
            create tab with default profile
            tell current session
                write text "cd \"$PROJECT_PATH\""
                write text "docker-compose -f docker-compose.yml logs -f"
                set name to "docker-logs"
            end tell
        end tell

        -- Switch back to first tab (where script is running)
        tell currentWindow
            select first tab
        end tell
    end tell
EOF

    echo "✅ Added 1 new tab to current iTerm window"
}

# Show setup summary
show_summary() {
    echo ""
    echo "🎉 Development environment setup complete!"
    echo ""
    echo "📝 Setup Summary:"
    echo "   • Docker containers started and healthy"
    echo "   • Brave window opened with client tab (localhost:5173)"
    echo "   • iTerm window with 2 tabs:"
    echo "     - Tab 1: dev-setup (where you are now)"
    echo "     - Tab 2: docker-logs (monitor all containers)"
    echo "   • Ready for portfolio development!"
    echo ""
    echo "🌐 Your development site: http://localhost:5173"
    echo ""
    echo "💡 Next steps:"
    echo "   • Switch to docker-logs tab to monitor container logs"
    echo "   • Your app should be available at http://localhost:5173"
    echo "   • Use this tab for git commands and other tasks"
    echo ""
    echo "🚀 Happy coding!"
}

# Main execution
main() {
    # Check current directory
    check_current_directory
    echo ""

    # Check dependencies
    check_dependencies
    echo ""

    # Start Docker containers
    start_docker_containers
    echo ""

    # Open browser
    open_browser
    echo ""

    # Setup iTerm
    setup_iterm
    echo ""

    # Show summary
    show_summary
}

# Run the main function
main "$@"

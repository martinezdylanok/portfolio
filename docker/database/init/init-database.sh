#!/bin/bash

# Portfolio Database Initialization script 
# This script automates the database initialization process with smart seeding

set -e

echo "Starting database initialization..."

# Wait for PostgreSQL to be ready
until pg_isready -U "$POSTGRES_USER" -d "$POSTGRES_DB"; do
  echo "Waiting for PostgreSQL to be ready..."
  sleep 2
done

echo "PostgreSQL is ready. Checking database state..."

# Check if projects table exists by trying to query it
TABLE_EXISTS=$(psql -t -c "SELECT 1 FROM projects LIMIT 1;" -U "$POSTGRES_USER" -d "$POSTGRES_DB" 2>/dev/null && echo "t" || echo "f")

if [ "$TABLE_EXISTS" = "f" ]; then
    echo "Projects table doesn't exist. Running full initialization..."
    
    # Run schema migration
    echo "Running schema migration..."
    psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" -f /migrations/001_initial_schema.sql
    
    # Run seed files
    echo "Running seed files..."
    psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" -f /seeds/001_real_projects.sql
    
    echo "Database initialization complete!"
else
    echo "Projects table exists. Checking if seeds need to be updated..."
    
     # Check if we have the expected seed projects (must match seeds exactly)
    EXPECTED_PROJECTS=("Portfolio Platform: Full‑Stack Showcase" "Belen Abdon: Building a Brand" "BV Architecture: Design in Motion" "En Marte: From Another Planet" "ISSAS: Alla Italiana")
    
    NEEDS_UPDATE=false
    MISSING_PROJECTS=()
    
    for project in "${EXPECTED_PROJECTS[@]}"; do
        PROJECT_EXISTS=$(psql -t -c "SELECT EXISTS (SELECT 1 FROM projects WHERE project_name = '$project');" -U "$POSTGRES_USER" -d "$POSTGRES_DB" 2>/dev/null || echo "f")
        
        if [ "$PROJECT_EXISTS" = "f" ]; then
            echo "Missing project: $project"
            MISSING_PROJECTS+=("$project")
            NEEDS_UPDATE=true
        else
            echo "Project exists: $project"
        fi
    done
    
    if [ "$NEEDS_UPDATE" = true ]; then
        echo "Some seed projects are missing. Re-running seeds..."
        echo "Missing projects: ${MISSING_PROJECTS[*]}"
        
        # Clear existing data and re-seed
        echo "Clearing existing projects table..."
        psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" -c "DELETE FROM projects;"
        
        # Run seed files
        echo "Running seed files..."
        psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" -f /seeds/001_real_projects.sql
        
        echo "Database re-seeded successfully!"
        
        # Verify all projects are now present
        echo "Verifying seed data..."
        for project in "${EXPECTED_PROJECTS[@]}"; do
            PROJECT_EXISTS=$(psql -t -c "SELECT EXISTS (SELECT 1 FROM projects WHERE project_name = '$project');" -U "$POSTGRES_USER" -d "$POSTGRES_DB" 2>/dev/null || echo "f")
            if [ "$PROJECT_EXISTS" = "t" ]; then
                echo "✅ Verified: $project"
            else
                echo "❌ Still missing: $project"
            fi
        done
    else
        echo "All seed projects are present. Skipping initialization."
        echo "Current projects in database:"
        psql -t -c "SELECT project_id, project_name FROM projects ORDER BY project_id;" -U "$POSTGRES_USER" -d "$POSTGRES_DB" 2>/dev/null || echo "Could not retrieve projects"
    fi
fi

echo "Database initialization check complete!"
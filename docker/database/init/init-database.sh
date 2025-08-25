#!/bin/bash

# Portfolio Database Initialization script 
# This script automates the database initialization process

set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    \i /migrations/001_initial_schema.sql
    \i /seeds/001_initial_seed.sql
    \i /seeds/002_real_projects.sql
EOSQL
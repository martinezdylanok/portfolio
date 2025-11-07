name: CI

on:
  pull_request:
    branches: [ "main" ]
  workflow_dispatch:

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:15-alpine
        env:
          POSTGRES_USER: postgres_user
          POSTGRES_PASSWORD: postgres_password
          POSTGRES_DB: portfolio_db_test
        ports:
          - "5432:5432"
        options: >-
          --health-cmd "pg_isready -U postgres_user -d portfolio_db_test" 
          --health-interval 5s 
          --health-timeout 5s 
          --health-retries 10

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20.x
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Lint (client and server)
        run: npm run lint

      - name: Install PostgreSQL client
        run: sudo apt-get update && sudo apt-get install -y postgresql-client

      - name: Wait for Postgres to be ready
        env:
          PGHOST: localhost
          PGUSER: postgres_user
        run: |
          for i in {1..30}; do
            if pg_isready -h "$PGHOST" -p 5432 -U "$PGUSER"; then
              echo "Postgres is ready" && break
            fi
            echo "Waiting for Postgres... ($i)" && sleep 2
          done

      - name: Run DB migrations and seeds
        env:
          PGPASSWORD: postgres_password
        run: |
          psql -h localhost -U postgres_user -d portfolio_db_test -f docker/database/migrations/001_initial_schema.sql
          psql -h localhost -U postgres_user -d portfolio_db_test -f docker/database/seeds/001_initial_seed.sql
          psql -h localhost -U postgres_user -d portfolio_db_test -f docker/database/seeds/002_real_projects.sql

      - name: Run client tests
        run: npm run test -w=packages/client -- --run

      - name: Run server tests
        env:
          NODE_ENV: test
          SERVER_PORT: 3001
          CLIENT_ORIGIN: http://localhost:5173
          POSTGRES_HOST: localhost
          POSTGRES_PORT: 5432
          POSTGRES_USER: postgres_user
          POSTGRES_PASSWORD: postgres_password
          POSTGRES_DB: portfolio_db_test
        run: npm run test -w=packages/server -- --run

      - name: Build (client and server)
        env:
          VITE_API_BASE_URL: http://localhost:3000/api
        run: npm run build



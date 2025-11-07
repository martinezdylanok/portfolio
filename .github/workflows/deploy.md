name: Deploy Production

on:
  push:
    branches: [ "main" ]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    concurrency:
      group: deploy-production
      cancel-in-progress: false
    environment:
      name: production
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup SSH
        uses: webfactory/ssh-agent@v0.9.0
        with:
          ssh-private-key: |
            ${{ secrets.SSH_PRIVATE_KEY }}

      - name: Add remote host to known_hosts
        run: |
          mkdir -p ~/.ssh
          ssh-keyscan -H ${{ secrets.SSH_HOST }} >> ~/.ssh/known_hosts

      - name: Copy env files if provided (optional)
        if: ${{ secrets.ENV_DEV != '' || secrets.ENV_PROD != '' }}
        env:
          SSH_USER: ${{ secrets.SSH_USER }}
          SSH_HOST: ${{ secrets.SSH_HOST }}
        run: |
          if [ -n "${{ secrets.ENV_DEV }}" ]; then
            echo "Uploading .env.dev"
            printf '%s' "${{ secrets.ENV_DEV }}" | ssh $SSH_USER@$SSH_HOST "cat > ~/portfolio/.env.dev"
          fi
          if [ -n "${{ secrets.ENV_PROD }}" ]; then
            echo "Uploading .env.prod"
            printf '%s' "${{ secrets.ENV_PROD }}" | ssh $SSH_USER@$SSH_HOST "cat > ~/portfolio/.env.prod"
          fi

      - name: Run deploy script on server
        env:
          SSH_USER: ${{ secrets.SSH_USER }}
          SSH_HOST: ${{ secrets.SSH_HOST }}
        run: |
          ssh $SSH_USER@$SSH_HOST "cd ~/portfolio && bash tasks/deploy.sh"



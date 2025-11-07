## CI/CD GitHub Secrets

Set these repository-level secrets in GitHub → Settings → Secrets and variables → Actions.

- `SSH_HOST`: Public hostname or IP of your production server (e.g. 1.2.3.4)
- `SSH_USER`: SSH user on the server (e.g. ubuntu)
- `SSH_PRIVATE_KEY`: Private key contents with access to the server (PEM format)
- `ENV_DEV` (optional): Full contents of `.env.dev` for the server repo path
- `ENV_PROD` (optional): Full contents of `.env.prod` for the server repo path

Notes:
- If `ENV_DEV`/`ENV_PROD` are omitted, the deploy job will use the files already present on the server.
- Ensure the server has the project at `~/portfolio` and Docker installed.
- DNS and TLS should already be configured. The compose files mount the Let's Encrypt certs.




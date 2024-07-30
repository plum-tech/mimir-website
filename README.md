# SIT Life Website

## How to contribute

### Install dependencies

You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `npm`:

```bash
pnpm install
```

### Run the development server

```bash
pnpm run dev
```

### How to deploy

First, make a directory as working directory.

Create a `docker-compose.yaml` file under the working directory, and copy-paste the following contents.

```yaml
services:
  mimir-website:
    image: ghcr.io/liplum-dev/mimir-website:latest # not yet prepared
    container_name: mimir-website
    expose:
      - 3000
    restart: always
  nginx:
    image: nginx:alpine
    container_name: nginx
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/conf.d/default.conf
      - ./certs:/etc/certs
    restart: always
    depends_on:
      - mimir-website

```

Then, create a `nginx.conf` file under the working directory, and copy-paste the following contents.

```nginx
server {
  listen 80;
  server_name mysit.life;

  location / {
    return 301 https://$host$request_uri;
  }
}

server {
  listen 443 ssl;
  server_name mysit.life;

  ssl_certificate /etc/certs/public.crt;
  ssl_certificate_key /etc/certs/private.key;

  location / {
    proxy_pass http://mimir-website:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

After that, copy-paste the SSL certificate files of `mysit.life` to `public.crt` and `private.key` under the working directory.

Finally, run the command below to start the server.

```bash
docker compose up --detach
```

Running the command below can stop the server.

```bash
docker compose down
```

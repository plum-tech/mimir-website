# SIT Life Website

## How to contribute

### Install dependencies

You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `pnpm`:

```bash
pnpm install
```

### Run the development server

```bash
pnpm run dev
```

### How to build

```bash
docker build . -t cr.liplum.net/mimir/website:<tag>
docker push cr.liplum.net/mimir/website:<tag>
```

### How to deploy

First, make a directory as working directory.

Create a `docker-compose.yaml` file under the working directory, and copy-paste the following contents.

```yaml
services:
  website:
    image: cr.liplum.net/mimir/website:<tag>
    container_name: mimir.website
    ports:
      - 9001:3000
    volumes:
      # public files
      - ./public:/app/public
    restart: always
```

Then, create a `nginx.conf` file under the working directory, and copy-paste the following contents.

```nginx
server {
  listen 443 ssl;
  server_name www.mysit.life;

  ssl_certificate /certs/www.mysit.life/public.crt;
  ssl_certificate_key /certs/www.mysit.life/private.key;

  location / {
    proxy_pass http://localhost:9001;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}

server {
  listen 80;
  server_name www.mysit.life;

  location / {
    return 301 https://$host$request_uri;
  }
}

server {
  listen 80;
  server_name mysit.life;

  location / {
    return 301 https://www.mysit.life$request_uri;
  }
}

server {
  listen 443 ssl;
  server_name mysit.life;

  location / {
    return 301 https://www.mysit.life$request_uri;
  }
}

```

After that, copy-paste the SSL certificate files of `www.mysit.life` to `public.crt` and `private.key` under the working directory.

Finally, run the command below to start the server.

```bash
docker compose up --detach
```

Running the command below can stop the server.

```bash
docker compose down
```

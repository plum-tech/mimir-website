# Xiao Ying Website

## Install dependencies

This project uses `pnpm` as package manager.

Run the following command to install all dependencies.

```bash
pnpm install
```

Run the following command to development server.

```bash
pnpm run dev
```

## How to build

Run the following command to build the website.

```bash
pnpm build
```

## How to deploy

### Build docker image

Ensure you've installed docker on your machine.

Run the following command to build a docker image with a sepcific tag.

```bash
docker build . -t cr.liplum.net/mimir/website:<tag>
docker push cr.liplum.net/mimir/website:<tag>
```

### Run docker container

First, make a directory as working directory.

Create a `compose.yml` file under the working directory, and copy-paste the following contents.

```yml
services:
  website:
    image: cr.liplum.net/mimir/website:<tag>
    container_name: mimir.website
    ports:
      - 9001:3000
    restart: always
```

Then, create a `nginx.conf` file under the working directory, and copy-paste the following contents.

```nginx
server {
  listen 443 ssl;
  server_name www.xiaoying.life xiaoying.life;

  ssl_certificate /certs/www.xiaoying.life/public.crt;
  ssl_certificate_key /certs/www.xiaoying.life/private.key;

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
  server_name www.xiaoying.life xiaoying.life;

  location / {
    return 301 https://$host$request_uri;
  }
}
```

After that, copy-paste the SSL certificate files of `www.xiaoying.life` to `public.crt` and `private.key` under the working directory.

Finally, run the command below to start the server.

```bash
docker compose up --detach
```

Running the command below can stop the server.

```bash
docker compose down
```

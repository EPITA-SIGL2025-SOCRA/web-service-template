# Sotracteur web service

REST web service (or web API) written in Javascript using NodeJS with Express.

## Run the template

- To run it, install and start the web service from your favorite terminal:

```sh
# uses NVM to switch to the expected version of NodeJS
nvm use
# install dependencies
npm i
# Starts the service with hot reload
npm run dev
# service should listen on localhost:3000
```

- Make sure your web service is responding, from another terminal session:

```sh
curl localhost:3000

# Sotracteur: OK
#             ______
#              |o  |   !
#  __          |:`_|---'-.
# |__|______.-.'_'.-----.|
#(o)(o)------''._.'     (O)

```

- You can stop the `npm run dev` process by using `CTRL + c` shortcut, or just kill your terminal session

## Build the template with Docker

- Build the docker image:

```sh
docker image build -t web-service-template:local .
```

- run it on your machine with port binding to localhost:3001 (not to clash with your web-service in dev mode if still running)

```sh
docker container run --rm -d --name web-service-template -p 3001:3000 web-service-template:local
```

- Make sure your web service inside your docker container is responding:

```sh
curl localhost:3001

# Sotracteur: OK
#             ______
#              |o  |   !
#  __          |:`_|---'-.
# |__|______.-.'_'.-----.|
#(o)(o)------''._.'     (O)
```

- Stop the container (it will be also removed thanks to the `--rm` flag when running container):

```sh
docker container stop web-service-template
```

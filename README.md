# Gamee entry task

Simple cookbook for adding and editing your own recipes.

## Getting started

Please follow instructions:

Clone repository with:

```
git clone https://github.com/radkag/gamee.git
```

Go to repository and install node dependencies for client and for server:
```
cd gamee/client
yarn install
cd ../server
yarn install
```

Import initial data to your database from `/server` directory:
```
yarn init-seed
```

Start DB in docker from `/server` directory:
```
docker-compose up
```

Run the server from `/server` directory:

```
nodemon server.js
```

Now `Node` server is running, open another terminal, go to `/client` directory and run the client:

```
yarn start
```
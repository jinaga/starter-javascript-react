# Jinaga Starter Kit for JavaScript and React

Jinaga runs both on the server and in the browser, so that it can exchange facts between the two.
This starter kit uses Webpack to bundle both sides.
It also demonstrates how to update a React user interface with Jinaga.

Find out more about [Jinaga](https://jinaga.com), [Webpack](https://webpack.js.org/), and [React](https://reactjs.org/).

## Installing

The easiest way to use this starter kit is to export it with Git.

```bash
git clone https://github.com/jinaga/starter-javascript-react.git myapplication
cd myapplication
rm -rf .git
```

Or go to the [GitHub page](https://github.com/jinaga/starter-javascript-react) and download the zip file.
Once you have the code, run:

```bash
npm install
```

## Database Setup

Jinaga saves its facts in PostgreSQL.
The easiest way to start up a database is to use Docker.

```bash
docker run -d --name jinaga-postgres -p5432:5432 -e POSTGRES_PASSWORD=secretpw -e APP_USERNAME=dev -e APP_PASSWORD=devpw -e APP_DATABASE=myapplication jinaga/jinaga-postgres-fact-keystore
```

For complete instructions, see [Jinaga PostgreSQL Setup](https://jinaga.com/documents/getting-started/creating-an-application/postgresql-setup/).

## Developing

To run in development mode:

```bash
npm run dev
```

This will watch the source code for changes and rebuild as necessary.
It will restart the server to load those changes.

## Release Build

To build for release:

```bash
npm run build
```

This creates a `dist` folder with the client-side code in `scripts/main.js`.
The server side code remains in `src/server`.

## Running

To run:

```bash
npm start
```

Build something incredible!

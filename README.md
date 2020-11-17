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
Create a PostgreSQL database, set up the dev user, and then run the setup script.
The setup script is located in `node_modules/jinaga/setup.sql`.
You can run it from the command line like this:

```bash
echo "CREATE DATABASE myapplication" | psql -h localhost -U postgres postgres
psql -h localhost -f node_modules/jinaga/setup.sql -U postgres myapplication
```

For complete instructions, see [Jinaga PostgreSQL Setup](https://jinaga.com/documents/getting-started/creating-an-application/postgresql-setup/).

## Building

To build:

```bash
npm run build
```

This creates a `dist` folder with the server-side code in `server.js`, and the client-side code in `scripts/main.js`.

## Running

To run:

```bash
npm start
```

## Developing

After the first build, you will probably want to run in development mode:

```bash
npm run dev
```

This will watch the source code for changes and rebuild as necessary.
It will restart the server to load those changes.

Build something incredible!

# MillenniumDB browser

## Configuration

For both development and production the environment variables can be set at `public/env.js`:

```javascript
# public/env.js

window.ENV = {
  # the URL of the remote MDB instance
  MDB_URL: "http://localhost:1234",
};
```

After the build, this can be modified at any time in the build directory at `dist/env.js`. This will be particularly useful when you would like to deploy the interface directly from the one provided in the MillenniumDB server.

## Development

This project uses [pnpm](https://pnpm.io/):

Install dependencies:

```bash
pnpm install
```

Start the development serveR:

```bash
pnpm run dev
```

## Build

Install dependencies:

```bash
pnpm install
```

Start the development serveR:

```bash
pnpm run build
```

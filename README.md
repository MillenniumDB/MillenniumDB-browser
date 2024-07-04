# MillenniumDB browser interface

## Configuration

### Environment variables

For development or production you will need to provide a `.env` file with the following variables:

```bash
# The URL of the remote MillenniumDB instance
VITE_MDB_SERVER_URL="ws://localhost:1234"

# The base URL for the app https://vitejs.dev/config/shared-options.html#base
VITE_APP_BASE_URL="/"
```

### Query examples

Optionally you can provide a set of examples at `src/data/examples.js`. You need to provide javascript objects with the following structure:

```javascript
const examples = [
  {
    title: 'Get 100 triples',                       // The title of the example
    query: 'SELECT * WHERE { ?s ?p ?o } LIMIT 100', // The query to execute
  },
];

export default examples;
```

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Build for production

Install dependencies:

```bash
npm install
```

Build the app:

```bash
npm run build
```

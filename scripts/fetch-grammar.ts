import fs from "fs/promises";
import path from "path";

async function downloadFile(url: string, dest: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.statusText}`);

  const buffer = Buffer.from(await res.arrayBuffer());
  await fs.writeFile(dest, buffer);
  console.log(`Downloaded to ${dest}`);
}

type GrammarDownloadDef = {
  language: string;
  lexerUrl: string;
  parserUrl: string;
};

const grammarDefs: GrammarDownloadDef[] = [
  {
    language: "gql",
    lexerUrl:
      "https://raw.githubusercontent.com/MillenniumDB/MillenniumDB/refs/heads/dev/src/query/parser/grammar/gql/GQLLexer.g4",
    parserUrl:
      "https://raw.githubusercontent.com/MillenniumDB/MillenniumDB/refs/heads/dev/src/query/parser/grammar/gql/GQLParser.g4",
  },
  {
    language: "mql",
    lexerUrl:
      "https://raw.githubusercontent.com/MillenniumDB/MillenniumDB/refs/heads/dev/src/query/parser/grammar/mql/MQL_Lexer.g4",
    parserUrl:
      "https://raw.githubusercontent.com/MillenniumDB/MillenniumDB/refs/heads/dev/src/query/parser/grammar/mql/MQL_Parser.g4",
  },
  {
    language: "sparql",
    lexerUrl:
      "https://raw.githubusercontent.com/MillenniumDB/MillenniumDB/refs/heads/dev/src/query/parser/grammar/sparql/SparqlQueryLexer.g4",
    parserUrl:
      "https://raw.githubusercontent.com/MillenniumDB/MillenniumDB/refs/heads/dev/src/query/parser/grammar/sparql/SparqlQueryParser.g4",
  },
];

async function main() {
  for (const grammarDef of grammarDefs) {
    const { language, lexerUrl, parserUrl } = grammarDef;

    const destDir = path.resolve("src/grammar", language);
    await fs.mkdir(destDir, { recursive: true });

    const lexerFilename = new URL(lexerUrl).pathname.split("/").pop();
    const lexerPath = path.resolve(destDir, lexerFilename!);
    await downloadFile(lexerUrl, lexerPath);

    const parserFilename = new URL(parserUrl).pathname.split("/").pop();
    const parserPath = path.resolve(destDir, parserFilename!);
    await downloadFile(parserUrl, parserPath);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

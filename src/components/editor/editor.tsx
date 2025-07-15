import classes from "./editor.module.css";

import {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { Box, useComputedColorScheme } from "@mantine/core";
import ReactMonacoEditor, { type OnMount } from "@monaco-editor/react";
import { LoadingOverlay } from "@mantine/core";
import EditorHeader, { type FileDef } from "./editor-header";
import { v4 as uuidv4 } from "uuid";
import { type editor } from "monaco-editor";
import { useMDB } from "@/providers/mdb-provider";

type EditorProps = {
  isRunning: boolean;
  isRunDisabled: boolean;
  onRun: () => void;
  onStop: () => void;
  onMount: () => void;
};

const Editor = forwardRef(
  ({ onRun, onStop, onMount, isRunning, isRunDisabled }: EditorProps, ref) => {
    const { catalog } = useMDB();

    const editorRef = useRef<editor.IStandaloneCodeEditor>(null);

    // expose internal ref to parent
    useImperativeHandle(
      ref,
      () => ({
        get editor() {
          return editorRef.current;
        },
      }),
      [],
    );

    const computedColorScheme = useComputedColorScheme();

    const q = `PREFIX dbo: <http://dbpedia.org/ontology/>
PREFIX dbp: <http://dbpedia.org/property/>
PREFIX dbr: <http://dbpedia.org/resource/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

# COMMENT!

SELECT ?person ?name ?birthPlace ?birthDate ?occupation ?abstract
       ?thumbnail ?homepage ?spouse ?child ?label
WHERE {
  {
    ?person a dbo:Person ;
            foaf:name ?name ;
            dbo:birthPlace ?birthPlace ;
            dbo:birthDate ?birthDate ;
            dbo:occupation ?occupation ;
            dbo:abstract ?abstract .

    OPTIONAL { ?person dbo:thumbnail ?thumbnail . }
    OPTIONAL { ?person foaf:homepage ?homepage . }
    OPTIONAL { ?person dbo:spouse ?spouse . }
    OPTIONAL { ?person dbo:child ?child . }

    FILTER (LANG(?abstract) = "en")
    FILTER (LANG(?name) = "en"@en)
  }
  UNION
  {
    ?person dbo:wikiPageRedirects ?redirectedFrom .
    ?redirectedFrom foaf:name ?name .
    OPTIONAL { ?redirectedFrom dbo:birthPlace ?birthPlace . }
    OPTIONAL { ?redirectedFrom dbo:birthDate ?birthDate . }
  }

  ?person rdfs:label ?label .
  FILTER (LANG(?label) = "en")

  SERVICE <http://dbpedia.org/sparql> {
    ?person dbo:birthYear ?birthYear .
    FILTER (?birthYear > "1960-01-01"^^xsd:date)
  }
}
GROUP BY ?person ?name ?birthPlace ?birthDate ?occupation ?abstract
         ?thumbnail ?homepage ?spouse ?child ?label
ORDER BY ASC(?birthDate)
LIMIT 100
`;

    const [files, setFiles] = useState<FileDef[]>([
      { id: "1", name: "new.rq", content: q },
      { id: "2", name: "new2.rq", content: "newfile2" },
    ]);

    const [activeFile, setActiveFile] = useState<FileDef>(files[0]);

    const handleChangeFile = (fileId: string) => {
      const file = files.find((f) => f.id === fileId);
      if (file && file !== activeFile) {
        setActiveFile(file);
      }
    };

    const handleAddFile = () => {
      const newFile: FileDef = {
        id: uuidv4(),
        name: "untitled",
        content: "",
      };
      setFiles([...files, newFile]);
      setActiveFile(newFile);
    };

    const handleFileClose = (fileId: string) => {
      setFiles((prevFiles) => {
        const nextFiles = prevFiles.filter((f) => fileId != f.id);

        if (activeFile.id === fileId) {
          const closedFileIndex = prevFiles.findIndex((f) => f.id === fileId);

          if (closedFileIndex > 0) {
            setActiveFile(prevFiles[closedFileIndex - 1]);
          } else {
            setActiveFile(nextFiles[0]);
          }
        }

        return nextFiles;
      });
    };

    const handleEditorMount: OnMount = (editor) => {
      editorRef.current = editor;

      onMount();
    };

    const isDarkMode = useMemo(() => {
      return computedColorScheme === "dark";
    }, [computedColorScheme]);

    const language = useMemo(() => {
      if (!catalog) return "plaintext";

      switch (catalog.getModelString()) {
        case "gql":
          return "mdb-gql";
        case "quad":
          return "mdb-mql";
        case "rdf":
          return "mdb-sparql";
        default:
          return "plaintext";
      }
    }, [catalog]);

    return (
      <Box className={classes.root}>
        <Box className={classes.headerWrapper}>
          <EditorHeader
            isRunning={isRunning}
            activeFile={activeFile}
            files={files}
            onFileChange={handleChangeFile}
            onFileAdd={handleAddFile}
            onFileClose={handleFileClose}
            isRunDisabled={isRunDisabled}
            onRun={onRun}
            onStop={onStop}
          />
        </Box>

        <Box className={classes.editorWrapper}>
          <ReactMonacoEditor
            onMount={handleEditorMount}
            path={activeFile?.id}
            defaultValue={activeFile?.content}
            language={language}
            theme={isDarkMode ? "mdb-dark" : "mdb-light"}
            loading={
              <LoadingOverlay
                visible
                loaderProps={{
                  color: "var(--mantine-color-bright)",
                  type: "dots",
                }}
              />
            }
            options={{
              minimap: {
                enabled: false,
              },
              renderWhitespace: "all",
              tabSize: 4,
              scrollbar: {
                alwaysConsumeMouseWheel: false,
              },
              mouseWheelZoom: true,
            }}
          />
        </Box>
      </Box>
    );
  },
);

export { Editor };

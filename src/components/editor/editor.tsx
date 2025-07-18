import classes from "./editor.module.css";

import type { FileDef } from "@/hooks/use-file-manager";
import { useFileManager } from "@/hooks/use-file-manager";
import { useMDB } from "@/providers/mdb-provider";
import {
  Anchor,
  Box,
  LoadingOverlay,
  Overlay,
  Text,
  useComputedColorScheme,
} from "@mantine/core";
import ReactMonacoEditor, {
  type OnChange,
  type OnMount,
} from "@monaco-editor/react";
import type { editor } from "monaco-editor";
import {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import EditorHeader from "./editor-header";

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

    // file management
    const {
      files,
      createFile,
      closeFile,
      updateFile,
      openFileIds,
      openFile,
      hasChanges,
      persistedFiles,
    } = useFileManager({
      key: "savedQueries",
    });

    const [activeFileId, setActiveFileId] = useState<string | undefined>();
    const activeFile = useMemo<FileDef | undefined>(() => {
      return activeFileId ? files[activeFileId] : undefined;
    }, [files, activeFileId]);

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

    const handleCreateFile = () => {
      const id = createFile();
      openFile(id);
      setActiveFileId(id);
    };

    const handleCloseFile = (id: string) => {
      const foundIndex = openFileIds.findIndex((_id) => _id === id);
      closeFile(id);
      if (id === activeFileId) {
        if (foundIndex > 0) {
          setActiveFileId(openFileIds[foundIndex - 1]);
        } else if (foundIndex === 0) {
          if (openFileIds.length > 1) {
            setActiveFileId(openFileIds[1]);
          } else {
            setActiveFileId(undefined);
          }
        } else {
          // should never happen
          setActiveFileId(undefined);
        }
      }
    };

    const handleSaveFile = (id: string, name?: string) => {
      updateFile({ id, name }, true);
    };

    const handleChangeFile = (id: string) => {
      setActiveFileId(id);
    };

    const handleEditorMount: OnMount = (
      _editor: editor.IStandaloneCodeEditor,
    ) => {
      editorRef.current = _editor;

      onMount();
    };

    const handleEditorChange: OnChange = (value) => {
      if (activeFileId) {
        updateFile({ id: activeFileId, content: value });
      }
    };

    const handleSelectQuery = (id: string) => {
      openFile(id);
      setActiveFileId(id);
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
            onSelectQuery={handleSelectQuery}
            persistedFiles={persistedFiles}
            openFileIds={openFileIds}
            hasChanges={hasChanges}
            activeFileId={activeFileId}
            files={files}
            onFileCreate={handleCreateFile}
            onFileClose={handleCloseFile}
            onFileChange={handleChangeFile}
            onSave={handleSaveFile}
            onRun={onRun}
            onStop={onStop}
            isRunning={isRunning}
            isRunDisabled={isRunDisabled}
          />
        </Box>

        <Box className={classes.editorWrapper}>
          {activeFileId === undefined && (
            <Overlay
              variant="blur"
              className={classes.noFileOverlay}
              color="#000"
              backgroundOpacity={0.05}
              blur={2}
            >
              <Text>
                {"Start by "}
                <Anchor
                  component="button"
                  underline="always"
                  onClick={() => handleCreateFile()}
                >
                  {"creating a new query"}
                </Anchor>
              </Text>
            </Overlay>
          )}
          <ReactMonacoEditor
            onMount={handleEditorMount}
            onChange={handleEditorChange}
            path={activeFile?.id || ""}
            value={activeFile?.content || ""}
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
              readOnly: activeFileId === undefined,
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

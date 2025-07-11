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

type EditorProps = {
  isRunning: boolean;
  onRun: () => void;
  onStop: () => void;
};

const Editor = forwardRef(({ onRun, onStop, isRunning }: EditorProps, ref) => {
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

  const [files, setFiles] = useState<FileDef[]>([
    { id: "1", name: "new.rq", content: "MATCH (?x) RETURN * LIMIT 100" },
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
  };

  const isDarkMode = useMemo(() => {
    return computedColorScheme === "dark";
  }, [computedColorScheme]);

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
          onRun={onRun}
          onStop={onStop}
        />
      </Box>

      <Box className={classes.editorWrapper}>
        <ReactMonacoEditor
          onMount={handleEditorMount}
          path={activeFile?.id}
          defaultValue={activeFile?.content}
          defaultLanguage={"plaintext"} // TODO: driver
          theme={isDarkMode ? "vs-dark" : "vs"} // TODO:
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
});

export { Editor };

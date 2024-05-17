import { Box } from '@mui/material';
import * as monaco from 'monaco-editor-core';
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  useContext,
} from 'react';
import { ColorModeContext } from '../main';

const Editor = forwardRef(({ language, ...props }, ref) => {
  const colorModeContext = useContext(ColorModeContext);

  const monacoEl = useRef(null);
  const [editor, setEditor] = useState(null);

  useImperativeHandle(
    ref,
    () => ({
      getEditor: () => editor,
    }),
    [editor]
  );

  useEffect(() => {
    monaco.editor.setTheme(
      colorModeContext.darkMode ? 'millenniumdb-dark' : 'millenniumdb-light'
    );
  }, [colorModeContext.darkMode]);

  useEffect(() => {
    const model = editor?.getModel();
    if (model) {
      monaco.editor.setModelLanguage(model, language);
    }
  }, [editor, language]);

  useEffect(() => {
    setEditor(
      monaco.editor.create(monacoEl.current, {
        theme: colorModeContext.darkMode
          ? 'millenniumdb-dark'
          : 'millenniumdb-light',
        language: 'plaintext',
        automaticLayout: true,
        minimap: { enabled: false },
        renderWhitespace: 'all',
        tabSize: 4,
        fontSize: 20,
        scrollbar: {
          alwaysConsumeMouseWheel: false,
        },
      })
    );

    return () => {
      editor?.dispose();
      monaco.editor.getModels().forEach((model) => model.dispose());
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Box className="editor" ref={monacoEl} {...props}></Box>;
});

export default Editor;

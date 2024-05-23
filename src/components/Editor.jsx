import { Box } from '@mui/material';
import * as monaco from 'monaco-editor-core';
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { useThemeContext } from '../context/ThemeContext';

const Editor = forwardRef(({ language, ...props }, ref) => {
  const themeContext = useThemeContext();

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
      themeContext.darkMode ? 'millenniumdb-dark' : 'millenniumdb-light'
    );
  }, [themeContext.darkMode]);

  useEffect(() => {
    const model = editor?.getModel();
    if (model) {
      monaco.editor.setModelLanguage(model, language);
      if (language === 'mql') {
        model.setValue(
          'MATCH (?from)-[?edge :?type]->(?to)\nRETURN *\nLIMIT 100\n'
        );
      } else if (language === 'sparql') {
        model.setValue('SELECT *\nWHERE { ?s ?p ?o . }\nLIMIT 100\n');
      }
    }
  }, [editor, language]);

  useEffect(() => {
    setEditor(
      monaco.editor.create(monacoEl.current, {
        theme: themeContext.darkMode ? 'millenniumdb-dark' : 'millenniumdb-light',
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

import React, { useState } from 'react';
import AceEditor from 'react-ace';
import '../styles/codeEditor.scss';
import executeCode from '../utils/codeRunner';

// Import required modules
import 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/theme-tomorrow_night';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/ext-language_tools';

function CodeEditor({ language = 'javascript' }) {
  const [code, setCode] = useState('// Write your code here');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [currentLanguage, setLanguage] = useState(language);

  const handleRun = async () => {
    setIsRunning(true);
    try {
      const result = await executeCode(code, currentLanguage);
      setOutput(result.success ? result.output : `Error: ${result.error}`);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
    setIsRunning(false);
  };

  const handleClear = () => {
    setCode('// Write your code here');
    setOutput('');
  };

  return (
    <div className="ide-container">
      <div className="editor-section">
        <div className="editor-header">
          <select 
            value={currentLanguage}
            onChange={(e) => setLanguage(e.target.value)}
            className="language-selector"
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
          </select>
          <div className="editor-controls">
            <button 
              onClick={handleRun}
              disabled={isRunning}
              className="run-btn"
            >
              {isRunning ? 'Running...' : 'Run Code'}
            </button>
            <button 
              onClick={handleClear}
              className="clear-btn"
            >
              Clear
            </button>
          </div>
        </div>
        <AceEditor
          mode={currentLanguage.toLowerCase()}
          theme="tomorrow_night"
          onChange={setCode}
          value={code}
          name="code-editor"
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
            fontSize: 14,
            useWorker: false
          }}
          style={{ width: '100%', height: '400px' }}
        />
      </div>
      <div className="output-section">
        <div className="output-header">
          <span>Output</span>
          <button 
            onClick={() => setOutput('')}
            className="clear-output-btn"
          >
            Clear Output
          </button>
        </div>
        <div className="output-content">
          <pre>{output}</pre>
        </div>
      </div>
    </div>
  );
}

export default CodeEditor; 
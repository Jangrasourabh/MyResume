'use client';

import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';

const CodeMirrorComponent = () => {
  const [code, setCode] = useState('// Write your code here');
  const [output, setOutput] = useState('');

  const executeCode = () => {
    let capturedOutput = '';

    // Override console.log to capture the output
    const originalConsoleLog = console.log;
    console.log = (...args) => {
      capturedOutput += args.join(' ') + '\n';
      originalConsoleLog(...args);
    };

    try {
      // Execute the code using eval
      eval(code);
    } catch (error) {
      capturedOutput += error.toString() + '\n';
    } finally {
      // Restore the original console.log
      console.log = originalConsoleLog;
    }

    // Delay setting the output to allow async code to complete
    setTimeout(() => {
      setOutput(capturedOutput);
    }, 500); // Adjust the delay as needed
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>JavaScript Code Execution</h1>
      <CodeMirror
        value={code}
        height="200px"
        extensions={[javascript()]}
        onChange={(value) => setCode(value)}
        theme={oneDark}
      />
      <button onClick={executeCode} style={{ marginTop: '10px', padding: '5px 10px' }}>
        Run Code
      </button>
      <div style={{ marginTop: '20px', color: '#fff', background: '#333', padding: '10px' }}>
        <h3>Output:</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
};

export default CodeMirrorComponent;

"use client";

import React, { useEffect, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";

const CodeMirrorComponent = () => {
  const [loading, setLoading] = useState(true);
  const [code, setCode] = useState(`// Write your JS code here
function myFunc () {
  console.log("Hello! I'm Sourabh Kumar")
}

myFunc()`);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const [output, setOutput] = useState("");

  const executeCode = () => {
    let capturedOutput = "";

    const originalConsoleLog = console.log;
    console.log = (...args) => {
      capturedOutput += args.join(" ") + "\n";
      originalConsoleLog(...args);
    };

    try {
      eval(code);
    } catch (error) {
      capturedOutput += error.toString() + "\n";
    } finally {
      console.log = originalConsoleLog;
    }

    setTimeout(() => {
      setOutput(capturedOutput);
    }, 500);
  };

  useEffect(() => {
    executeCode();
  }, []);

  return (
    <>
      <style>{`.my-code-mirror-wrapper .cm-editor {
    border-radius: 10px 10px  0 0;
    overflow: hidden;
}`}</style>
      <div className="ml-5 lg:w-1/3 my-code-mirror-wrapper">
        {!loading ? (
          <>
            <div className="relative">
              <CodeMirror
                value={code}
                height="180px"
                width="100%"
                style={{ borderRadius: "5px" }}
                extensions={[javascript()]}
                onChange={(value) => setCode(value)}
                theme={oneDark}
              />
              <button
                className="absolute top-2 right-2 text-emerald-500 flex items-center gap-1 text-sm"
                onClick={executeCode}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
                </svg>
                Run Code
              </button>
            </div>
            <div
              style={{
                minHeight: "180px",
                color: "#fff",
                background: "#333",
                padding: "10px",
                borderRadius: "0 0 10px 10px",
              }}
            >
              <h3 className="font-bold">Output:</h3>
              <pre>{output}</pre>
            </div>
          </>
        ) : (
          <div className="w-full flex items-center justify-center"><div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
        )}
      </div>
    </>
  );
};

export default CodeMirrorComponent;

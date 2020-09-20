import React, {Fragment, useState} from 'react'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import './codemirror.css'

require("codemirror/theme/material.css");
require("codemirror/theme/dracula.css");
require("codemirror/mode/python/python");
require("codemirror/lib/codemirror.css");

const DEFAULT_PYTHON_OPTIONS = {
    autoCloseBrackets: true,
    cursorScrollMargin: 48,
    mode: "python",
    lineNumbers: true,
    indentUnit: 2,
    tabSize: 2,
    styleActiveLine: true, 
    class: "CodeMirror"
  };
  

const CodeEditor = () => {
    const [code, setCode] = useState("# Please include EXACTLY ONE function definition. Don't forget to call your function in the end!")

    return <Fragment>
        <div className="mirror-wrapper">
            <CodeMirror
                value={code}
                options={{
                    ...DEFAULT_PYTHON_OPTIONS,
                    theme: 'material'
                }} 
                onBeforeChange={(editor, data, value, next) => {
                    // Execute anything before onChange
                    next()
                }}
                onChange={(editor, data, value) => {
                    console.log(value)
                    setCode(value)
                }}
            />
        </div>
    </Fragment>
}

export default CodeEditor
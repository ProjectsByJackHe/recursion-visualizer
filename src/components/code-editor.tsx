import React, {Fragment} from 'react'
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
  

const CodeEditor = (props: any) => {
    return <Fragment>
        <div className="mirror-wrapper">
            <CodeMirror
                value={props.code}
                options={{
                    ...DEFAULT_PYTHON_OPTIONS,
                    theme: 'material'
                }} 
                onBeforeChange={(editor, data, value, next) => {
                    // Execute anything before onChange
                    next()
                }}
                onChange={(editor, data, value) => {
                    props.setCode(value)
                }}
            />
        </div>
    </Fragment>
}

export default CodeEditor
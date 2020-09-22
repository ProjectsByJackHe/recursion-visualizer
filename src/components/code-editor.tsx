import React, {Fragment} from 'react'
import {Controlled as CodeMirror} from 'react-codemirror2'
import './codemirror.css'

require("codemirror/theme/material.css");
require("codemirror/theme/dracula.css");
require("codemirror/mode/python/python");
require("codemirror/lib/codemirror.css");

const DEFAULT_PYTHON_OPTIONS = {
    autoCloseBrackets: true,
    mode: "python",
    lineNumbers: true,
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
                onBeforeChange={(editor, data, value) => {
                    // Execute anything before onChange
                    props.setCode(value)
                }}
            />
        </div>
    </Fragment>
}

export default CodeEditor
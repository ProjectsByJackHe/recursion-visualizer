import React, {Fragment, useState} from 'react'
import Controls from './controls'
import CodeEditor from './code-editor'
import { getFuncName, getFuncCall, truncateFuncCall } from '../util/utility-functions'

const UserInput = () => {
    const [code, setCode] = useState("#Include at least one function definition. Don't forget to call your function.")
    
    const runCode = () => {
        console.log("going to send HTTP request now!")
        console.log(code)
        // extract function name 
        const functionName = getFuncName(code)
        if (functionName === undefined) {
            alert("Make sure you have at least one function defined, and your function name is <= 8 characters.")
            return 
        }
        // extract function call. Result will be ['call', [start index, end index]]
        const functionCall = getFuncCall(code, functionName)
        if (functionCall === undefined) {
            alert("Make sure you call your function") 
            return 
        }
        // truncate function call 
        const codeToSend = truncateFuncCall(code, functionCall[1])

        let callTrace;

        try {
            // send HTTP request to flask server and store 
            // response inside callTrace
        } catch (e) {
            // if and when there is some error executing the python code on the server, 
            // the flask server will send back some sort of error response. We will 
            // catch that case here and alert the user accordingly
        }

        // render callTrace
    }
    
    return <Fragment>
        <CodeEditor code = {code} setCode = {setCode}/>
        <Controls runCode = {runCode}/> 
    </Fragment>
}

export default UserInput
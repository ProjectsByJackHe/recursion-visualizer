import React, {Fragment, useState} from 'react'
import Controls from './controls'
import CodeEditor from './code-editor'
import { getFuncName, getFuncCall, truncateFuncCall } from '../util/utility-functions'



const UserInput = (props: any) => {
    const [code, setCode] = useState("# Don't use your tabs. This editor has smart indention enabled. Just press 'enter'")
    
    const runCode = async () => {
        // extract function name 
        const functionName = getFuncName(code)
        if (functionName === -1) {
            alert("Make sure you have at least one function defined, and your function name is <= 8 characters.")
            return 
        }
        console.log("function name: " + functionName)

        // extract function call. Result will be ['call', [start index, end index]]
        const functionCall = getFuncCall(code, functionName)
        if (functionCall === -1) {
            alert("Make sure you call your function") 
            return 
        }
        console.log("function call: " + functionCall)

        // truncate function call 
        const codeToSend = truncateFuncCall(code, functionCall)
        console.log("code to send: " + codeToSend)

        let callTrace;
        let noError = true
        try {
            // send HTTP request to flask server and store 
            // response inside callTrace
            const domain = process.env.BACKEND || "http://localhost:5000"
            const options = `/execute?funcName=${functionName}&funcCall=${functionCall[0]}`
            const fetchConfig = {
                method: "POST",
                body: codeToSend
            }
            let response = await fetch(domain + options, fetchConfig)
            callTrace  = await response.text()
            if (!(response.ok)) {
                throw new Error(callTrace)
            }
        } catch (e) {
            // if and when there is some error executing the python code on the server, 
            // the flask server will send back some sort of error response. We will 
            // catch that case here and alert the user accordingly
            alert("There was an error executing your code. Details: " + e)
            noError = false
        }
        
        if (callTrace && noError) {
            // render callTrace
            const arrOfStr = callTrace.split('|') 
            const arrOfCalls = [] 
            for (let i = arrOfStr.length - 1; i >= 0; i--) {
                arrOfCalls.push(arrOfStr[i].split(':'))
            }
            props.setArrOfCalls(arrOfCalls)
            props.setFuncName(functionName)
        }
    }
    
    return <Fragment>
        <CodeEditor code = {code} setCode = {setCode}/>
        <Controls runCode = {runCode}/> 
    </Fragment>
}

export default UserInput
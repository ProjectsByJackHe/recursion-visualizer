import React, { Fragment, useState } from "react";
import Controls from "./controls";
import CodeEditor from "./code-editor";
import {
  getFuncName,
  getFuncCall,
  truncateFuncCall,
} from "../util/utility-functions";

const UserInput = (props: any) => {
  const [submittedCode, setCode] = useState(
    "# DO NOT include any 'print(...)' statements! \n\ndef fib(x):\n    if x == 1 or x == 2:\n        return 1\n    return fib(x - 1) + fib(x - 2)\n\nfib(10)"
  );

  const runCode = async () => {
    let code = "";
    for (let i = 0; i < submittedCode.length; i++) {
      if (submittedCode[i] === "\t") {
        code += "    ";
      } else {
        code += submittedCode[i];
      }
    }
    // extract function name
    const functionName = getFuncName(code);
    if (functionName === -1) {
      alert(
        "Make sure you have at least one function defined, and your function name is <= 8 characters."
      );
      return;
    }
    console.log("function name: " + functionName);
    // extract function call. Result will be ['call', [start index, end index]]
    const functionCall = getFuncCall(code, functionName);
    if (functionCall === -1) {
      alert("Make sure you call your function");
      return;
    }
    console.log("function call: " + functionCall);
    // truncate function call
    const codeToSend = truncateFuncCall(code, functionCall);
    console.log("code to send: " + codeToSend);
    props.setIsLoading(true)
    let callTrace;
    let noError = true;
    try {
      // send HTTP request to flask server and store
      // response inside callTrace
      const domain = "https://recursion0r94s8df984.herokuapp.com";
     
      const options = `/execute?funcName=${functionName}&funcCall=${functionCall[0]}`;
      const fetchConfig = {
        method: "POST",
        body: codeToSend,
      };
      let response = await fetch(domain + options, fetchConfig);
      callTrace = await response.text();
      if (!response.ok) {
        throw new Error(callTrace);
      }
    } catch (e) {
      // if and when there is some error executing the python code on the server,
      // the flask server will send back some sort of error response. We will
      // catch that case here and alert the user accordingly
      alert("There was an error executing your code. Details: " + e);
      noError = false;
    }
    props.setIsLoading(false)
    console.log(callTrace)
    if (callTrace && noError) {
      // render callTrace
      props.setIsRunning(true)
      callTrace = callTrace.replace("'", "");
      const arrOfStr = callTrace.split("|");
      const arrOfCalls: string[][] = [];
      console.log(arrOfCalls);
      for (let i = arrOfStr.length - 1; i >= 0; i--) {
        arrOfCalls.push(arrOfStr[i].split(":"));
      }
      props.setArrOfCalls(arrOfCalls);
      props.setFuncName(functionName);
    }
  };

  return (
    <Fragment>
      <CodeEditor code={submittedCode} setCode={setCode} />
      <Controls
        runCode={runCode}
        isRunning={props.isRunning}
        reset={props.reset}
        setArrOfCalls={props.setArrOfCalls} 
        jelly={props.jelly}
        setJelly={props.setJelly}
        setRenderSpeed={props.setRenderSpeed}
      />
    </Fragment>
  );
};

export default UserInput;

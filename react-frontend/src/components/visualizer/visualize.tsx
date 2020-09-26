import React from "react";
import GraphComponent from "./graph";

/**
 * TODO:
 *  - polish the visualizer component now with react springs
 *  - learn about dockerization and containerization to enforce safe
 *    remote code execution
 *  - handle more edge cases on flask server. (infinite recursion calls, runtime... etc)
 */

const Visualizer = (props: any) => {
  const callTrace = props.arrOfCalls;
  const funcName = props.name;
  console.log("name: " + funcName)
  const renderSpeed = props.renderSpeed;
  return <GraphComponent name={funcName} callTrace={callTrace} renderSpeed = {renderSpeed}/>;
};

export default Visualizer;

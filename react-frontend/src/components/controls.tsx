 /* eslint-disable */ 
import React from "react";
import { Button } from "@material-ui/core";
import "./controls.css";

const Controls = (props: any) => {

  return (
      <div className="ControlPanel">
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "10px", marginTop: "10px" }}
          onClick={props.runCode}
          disabled={props.isRunning}
        >
          {" "}
          Run Code{" "}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          style={{ marginLeft: "10px", marginTop: "10px" }}
          disabled={props.isRunning}
          onClick={() => {props.setArrOfCalls([])}}
        >
          {" "}
          Instructions + Reset{" "}
        </Button>
      </div>
  );
};

export default Controls;

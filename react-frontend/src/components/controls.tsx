import React, { Fragment } from "react";
import { Button } from "@material-ui/core";
import "./controls.css";

const Controls = (props: any) => {
  return (
    <Fragment>
      <div className="ControlPanel">
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "10px" }}
          onClick={props.runCode}
          disabled={props.isRunning}
        >
          {" "}
          Run Code{" "}
        </Button>
      </div>
    </Fragment>
  );
};

export default Controls;

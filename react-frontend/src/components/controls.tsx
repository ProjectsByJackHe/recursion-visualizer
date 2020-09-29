 /* eslint-disable */ 
import React from "react";
import { Button, Slider } from "@material-ui/core";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import "./controls.css";

const Controls = (props: any) => {

  const handleChange = () => {
    props.setJelly(!props.jelly)
  }

  const onSlide = (e: any, newValue: number | number[]) => {
    props.setRenderSpeed(newValue)
  }

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
      
         <FormControlLabel
          style={{marginLeft: "10px", marginTop: "10px"}}
          control={<Switch
            checked={props.jelly}
            onChange={handleChange}
            color="primary"
          />}
          label="Jelly"
        />

        <Slider
          defaultValue={50}
          aria-labelledby="discrete-slider-always"
          step={1}
          valueLabelDisplay="on"
          onChange={onSlide}
          min={10}
        />
      </div>
  );
};

export default Controls;
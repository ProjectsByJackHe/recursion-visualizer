import React, {Fragment, useState} from 'react';
import './App.css';
import UserInput from './components/userinput'
import Visualizer from './components/visualizer/visualize'

function App() {
  const [arrOfCalls, setArrOfCalls] = useState([])
  const [automaticMode, setAutomaticMode] = useState(true) 

  // if automaticMode == true: 
  const [renderSpeed, setRenderSpeed] = useState(1000) 
  
  // if automaticMode == false: 
  const [renderIndex, setRenderIndex] = useState(0)

  return (
    <Fragment>
      <UserInput
        setArrOfCalls={setArrOfCalls}
        setAutomaticMode={setAutomaticMode}
        setRenderSpeed={setRenderSpeed}
        setRenderIndex={setRenderIndex}
      />
      <Visualizer
        arrOfCalls={arrOfCalls}
        automaticMode={automaticMode}
        renderSpeed={renderSpeed}
        renderIndex={renderIndex}
      />
    </Fragment>
  );
}

export default App;

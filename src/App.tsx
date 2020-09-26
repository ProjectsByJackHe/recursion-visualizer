import React, {Fragment, useState} from 'react';
import './App.css';
import UserInput from './components/userinput'
import Visualizer from './components/visualizer/visualize'

function App() {
  const [arrOfCalls, setArrOfCalls] = useState([]) 
  const [funcName, setFuncName] = useState("")
  const [renderSpeed, setRenderSpeed] = useState(500) 

  return (
    <Fragment>
      <UserInput
        setArrOfCalls={setArrOfCalls}
        setRenderSpeed={setRenderSpeed}
        setFuncName={setFuncName}
      />
      <Visualizer
        arrOfCalls={arrOfCalls}
        renderSpeed={renderSpeed}
        name={funcName}
      />
    </Fragment>
  );
}

export default App;

import React, {Fragment, useState} from 'react';
import './App.css';
import UserInput from './components/userinput'
import Visualizer from './components/visualizer'

function App() {
  const [arrOfCalls, setArrOfCalls] = useState([]) 
  const [funcName, setFuncName] = useState("")
  const [renderSpeed, setRenderSpeed] = useState(500) 
  const [isRunning, setIsRunning] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  return (
    <Fragment>
      <UserInput
        setArrOfCalls={setArrOfCalls}
        setRenderSpeed={setRenderSpeed}
        setFuncName={setFuncName}
        setIsRunning={setIsRunning}
        setIsLoading={setIsLoading}
        isRunning={isRunning}
      />
      <Visualizer
        name={funcName}
        callTrace={arrOfCalls}
        renderSpeed={renderSpeed}
        setIsRunning={setIsRunning}
        isLoading={isLoading}
      />
    </Fragment>
  );
}

export default App;

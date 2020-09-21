import React, {Fragment, useState} from 'react';
import './App.css';
import UserInput from './components/userinput'
import Visualizer from './components/visualizer/visualize'

function App() {
  const [arrOfCalls, setArrOfCalls] = useState([])
  return ( 
  <Fragment>
    <UserInput setArrOfCalls = {setArrOfCalls}/>
    <Visualizer arrOfCalls = {arrOfCalls}/>
  </Fragment>
  );
}

export default App;

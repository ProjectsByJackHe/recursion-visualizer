import React, {Fragment} from 'react';
import './App.css';
import Controls from './components/controls'
import CodeEditor from './components/code-editor'

function App() {
  return ( 
  <Fragment>
    <CodeEditor />
    <Controls />
  </Fragment>
  );
}

export default App;

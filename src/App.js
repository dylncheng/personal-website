import logo from './logo.svg';
import React from 'react';
import './App.css';
import Landing from './components/Landing'
import {Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <Routes>
      {/* <Route path="/resume">
        {/* <Resume/> */}
      {/* </Route> */} 
      <Route path="/" exact element={<Landing/>}/>
      {/* <Route path="/test"> */}
         {/* <Test/> */}
      {/* </Route> */}
    </Routes>
  );
}

export default App;


{/* <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
<body>
  <p>
    Hi
  </p>
</body>
</div> */}
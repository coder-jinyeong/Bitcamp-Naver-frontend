<<<<<<< HEAD
import React from 'react';
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'
import Home from "./hello/Home";
import Bmi from "./hello/Bmi";
import Calc from "./hello/Calc";
import Grade from "./hello/Grade";
import Login from "./hello/Login";    

const App =() =>{
  return(
    <div>
      <Router>
      <Routes>
        <Route expected path = "/" element = {<Home/>}/>
        <Route path = "/bmi" element = {<Bmi/>}/>
        <Route path = "/calc" element = {<Calc/>}/>
        <Route path = "/grade" element = {<Grade/>}/>
        <Route path = "/login" element = {<Login/>}/>
      </Routes>
      </Router>
    </div>
  )
}
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

>>>>>>> 58c4337caeaed2f7411150538eca68c83bd73818
export default App;

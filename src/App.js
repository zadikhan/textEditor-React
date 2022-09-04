import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
/* import About from './components/About'; */

import React, { useState } from 'react';
import Alert from "./components/Alert";

/* 
import {
  BrowserRouter as Router,
  Routes,
  Route,
   // eslint-disable-next-line
  Link,
  
} from "react-router-dom"; */

function App() {
  const [mode, setDarkMode] = useState('light');

  const [alert,setalert] = useState(null);

  const showAlert = (message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null);
    },1500)
  }
  const toggleMode = () => {
    if (mode === "light") {
      setDarkMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("dark mode has been enabled","success");
    }
    else {
      setDarkMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled","success");
    }
  }

  return (
    <>
    {/* <Router> */}

    
      <Navbar title="AK textEditor" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
     {/*  <Routes>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/"> */}
            
        <Textform showAlert={showAlert} mode={mode} heading="Enter the text to analyse" />
         {/*  </Route>
        </Routes> */}
        </div>
       {/*  </Router> */}
      


    </>
  )
}
export default App;

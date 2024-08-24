
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  link
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState("light")
  const [alert, setAlert] = useState(null)
  const showAlert =(message,type) =>{
    setAlert({
      msg : message,
      type : type
    })
 setTimeout(() => {
  setAlert (null);
  
 }, 1500);
  } 
  const toggleMode=()=>{
        if(mode===('light')){
          setmode('dark')
          document.body.style.backgroundColor="grey";
          showAlert("Dark mode has been enabled","success")
          document.title="MyApp-darkmode";
        }
        else{
          setmode('light')
          document.body.style.backgroundColor="white"
          showAlert("Light mode has been enabled","success")
          document.title="MyApp-lightmode"
        }
  }  

  
  return (
    <>

<Router>
<Navbar  Aboutus="About us" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3" >
          <Routes>
          <Route path="/about">
            <About />
          </Route>
        <Route path="/">
            
< TextForm showAlert={showAlert} heading ="Enter the text"/>
          </Route>
        </Routes>

</div>
    </Router>

    </>
  );
}

export default App;

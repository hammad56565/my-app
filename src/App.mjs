
// import './App.css';
// import React from "react";
import { useState } from 'react';
import About from './components/About.mjs';
import Navbar from './components/Navbar.mjs';
import TextForm from './components/TextForms.mjs';
import Alert from './components/alert.mjs';
// import {            // To use router 
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
function App() {

 const[mode,setMode] = useState('light') // whether dark mode is enable 
 const[alert,setAlert] = useState(null) // whether dark alert is enable 

const showAlert = (message,type)=>{
  setAlert({
    msg : message ,
    type : type
  })
}


 const toggleMode = ()=>{
  if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = '#2f335c'
    document.body.style.Color = 'white'
    showAlert('Dark mode has been enabled' ,'success')
    document.title = 'TextUtils - Dark'
    // setInterval(()=>{
    //   document.title = 'TextUtils - Int 1'

    // },1500)
    // setInterval(()=>{
    //   document.title = 'TextUtils - Int 2'

    // },2000)
  }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white'
    document.body.style.Color = '#2f335c'
    showAlert('Light mode has been enabled' ,'success')
    document.title = 'TextUtils - Light'

  }
 }
  return (
    <>
    {/* <Router> */}
<Navbar title='TextUtils' about='About Us' mode={mode}  toggleMode={toggleMode}/>
<Alert alert={alert} />
           {/* <TextForm heading='Enter Text To Analyze' mode={mode} showAlert={showAlert} /> */}
{/* <Routes> */}
          {/* <Route exact path="/about" element={<About />}/> */}
          {/* <Route exact path="/" element={   <TextForm heading='Enter Text To Analyze' mode={mode} showAlert={showAlert} />}/> */}
            {/* <About /> */}
          {/* </Route> */}
          <TextForm heading='Enter Text To Analyze' mode={mode} showAlert={showAlert} />
          {/* <Route path="/">
          </Route> */}
        {/* </Routes> */}
{/* <About/> */}
{/* </Router> */}
    </>
  );
}

export default App;

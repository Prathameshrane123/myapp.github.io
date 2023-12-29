// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link>


let name = "Prathamesh";
function App() {
  const [mode, setMode] = useState('light')    // Whether dark mode is enabled or not
  const enableDarkMode = ()=>{
    if (mode ==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'light';
    }
  }


  return (
  
    <><div className="App" mode={mode} >

      {/**<header     className="App-header"> **/}
      <h1>Hello There </h1>


    </div>
       <>
       {/* <nav>
      //     <li>Home</li>
      //     <li>About</li>
      //     <li>Contact</li>
      //     <li>About Us</li>
      // </nav>
      // <div     className= "container">
      //   <h1>Hello, {name}</h1>
      //   <img src = ""></img>
      // </div> */}
       </>
       {/* <h1>Hello, {name}</h1>
       <nav>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>About Us</li>
      </nav>
      <br></br> */}

      <Navbar title= "TextUtils..." aboutText= "About TextUtils by using props" mode={mode} enableDarkMode={enableDarkMode}/>
      
    <div className="container my-3" >
    {/* props are passed */}
    <TextForm heading= "Enter a text to analyze"  mode={mode} />          
  <About mode={mode}/>


    </div>

    

      
      
</>

      
  

  
  );
}

export default App;

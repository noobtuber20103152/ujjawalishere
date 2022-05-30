
import './App.css';
import { useEffect, useState } from 'react';
import About from './About/About';
import Competitive from './Competitive/Competitive';
import Education from './Education/Education';
import Front from './Front Page/Front';
import Navbar from './Navbar/Navbar';
import Project from './Projects/Project';

function App() {
  const [mode, setmode] = useState("black")
   const onclick = ()=>{
     if(mode==='black'){
       setmode("white")
     }
     else{
       setmode("black");
     }
   }
  return (
    <>
      <Navbar onclick={onclick} mode={mode}  />
      <Front  mode={mode} />
      <About mode={mode}  />
      <Project mode={mode} />
      <Education  />
      <Competitive  />
    </>
  );
}

export default App;

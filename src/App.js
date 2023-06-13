import React from "react";
import "./index.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/Project' element={<Project/>} />

    </Routes>


    </>
  );
}

export default App;

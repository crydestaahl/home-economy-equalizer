import React from 'react';
import './App.css';
import Card from './card'
import bulma from 'bulma'
import style from './style.sass'
import Visuals from './visuals'
import { useState, useEffect } from 'react'

function App() {
  const [ sallary, setSallary ] = useState(0);
  let sallaryElla;
  let sallaryChrille; 
  
  useEffect(() =>{
    sallaryElla = getSallary();
    sallaryChrille = getSallary();
  })

  const getSallary = (sallary) => {
    const newSallary = sallary; 
    setSallary(newSallary);
  }

  return (
    <div className="container has-margin-4">
      <p className='title is-2 has-margin-1 has-text-white has-padding-1'>The Home Economy Equalizer v2</p>
      <div className="columns">
            <div className="column">  
               <Card name="Bonnie" sallary={parseInt(sallaryElla)} getSallary={getSallary} />
            </div>  
            <div className="column">  
              <Card name="Clyde" sallary={parseInt(sallaryChrille)} getSallary={getSallary} />
            </div> 
      </div>
      {/*
        <button className="button" onClick="">Save to excel</button>
        <Visuals />
      */}
    </div>
  );
}

export default App;

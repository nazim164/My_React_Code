
import React, { useState } from 'react'
import './App.css';
import ngp from "./ngp.jpg";
import pune from "./pune.jpg";
import mumbai from "./mumbai.jpg";
import losangeles from "./losangeles.jpg";
import sanjose from "./sanjose.jpg";
import oakland from "./oakland.jpg";
import MultiSelect from './MultiSelect'

export default function App() {
  const [countries, setCountries] = useState([
    { name: "India", id: 0 },
    { name: "USA", id: 1 },
    { name: "UAE", id: 2 },
  ]);
  const [states, setStates] = useState([
    [
      { name: "Maharashtra", id: 0 },
      { name: "Gujrat", id: 1 },
      { name: "Rajasthan", id: 2 }
    ],
    [
      { name: "California", id: 0 },
      { name: "Boston", id: 1 },
      { name: "New York", id: 2 }
    ],
    [
      { name: " Abu Dhabi", id: 0 },
      { name: "Dubai", id: 1 },
      { name: "Sharjah", id: 2 }
    ]
  ]);

  const [city, setCity] = useState([
    [
      { name: "Nagpur", id: 0, img: ngp },
      { name: "Pune", id: 1, img: pune },
      { name: "Mumbai", id: 2, img: mumbai },
      
    ],
    [
      { name: "Los Angeles", id: 0, img: losangeles },
      { name: "San Jose", id: 1, img: sanjose },
      { name: "Oakland", id: 2, img: oakland }
    ],
  ]);
  const [opt, setopt] = useState([]);
  const [opt1, setopt1] = useState([]);
  const [dis, setdis] = useState([])

  function oncheck(e) {
    if ((countries[+e.target.value]) === countries[0]) {
      setopt(states[0]);
      setopt1(city[0]);
    }
    else if ((countries[+e.target.value]) === countries[1]) {
      setopt(states[1]);
      setopt1(city[1]);
    }
    else if ((countries[+e.target.value]) === countries[2]) {
      setopt(states[2]);
      // setopt1(city[2]);
    }

  }

  function ondis(e) {
    setdis(opt1[e.target.value]);
  }
  return (
    <div className="app">

      <select onChange={oncheck}>
        <option>Select Countries</option>
        {countries.map((countri) => (
          <option value={countri.id}>
            {countri.name}
          </option>
        ))}
      </select>
      <br /><br />

      <select className="select">
        <option>Select states</option>
        {opt.map((ops) => (
          <option value={ops.id}>
            {ops.name}
          </option>
        ))}
      </select>
      <br /><br />

      <select onChange={ondis}>
        <option>Select City</option>
        {opt1.map((ops1) => (
          <option value={ops1.id}>
            {ops1.name}
          </option>
        ))}
      </select>
      <br /><br />
      <img src={dis.img}></img>
      <MultiSelect/>
    </div>

  )
}

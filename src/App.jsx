import React from 'react';
import NavBar from './components/NavBar.jsx';
import InfoCard from './components/InfoCard.jsx';
import data from './nycPublicWifi.jsx';
//import data from './freeWifiFinder.jsx';
//import MapCard from './components/MapCard.js';
//import data from './nycPublicWifi.js';
import './App.css';

function App() {
  console.log(data[0].name)
  return (
    <main>
      <NavBar />
       <img src="../map.png"
        length="1"
        height="300" className="center" />
      {data.map(wifi => (
        <InfoCard wifi={wifi} key={wifi.name} />
      ))}
     
    </main>
  );
}

export default App;
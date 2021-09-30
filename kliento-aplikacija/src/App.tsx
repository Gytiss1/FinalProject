import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [renginiai, setRenginiai] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/renginiai').then(response => {
      console.log(response);  
      setRenginiai(response.data);
    })
  }, [])



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {renginiai.map((renginys:any) => (
            <li key={renginys.id}>
              {renginys.pavadinimas}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;

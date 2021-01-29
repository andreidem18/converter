import './App.css';
import React, { useState } from 'react';

const Converter = () => {

  const [degrees, setDegrees] = useState(0);
  const [radians, setRadians] = useState(0);

  function convertToRadians(event){
    let value = event.target.value;
    if(value <= 360 && value >= 0){
      setDegrees(value);
      setRadians(Math.round((value/57.296) * 1000)/1000);
    } else {
      alert('Lo sentimos, valor inválido');
      setDegrees(360);
      setRadians(6.283);
    }
  }
  function convertToDegrees(event){
    let value = event.target.value;
    if(value <= 6.283 && value >= 0){
      setRadians(value);
      setDegrees(Math.round((value*57.296) * 1000)/1000);
    } else {
      alert('Lo sentimos, valor inválido');
      setDegrees(360);
      setRadians(6.283);
    }
  }
  return (
    <div className="center">
      <div>
        <div className="text-center">
          <label htmlFor="degrees">Grados</label>
          <input type="text" onChange={convertToRadians} value={degrees}/>
        </div>
      </div>
      <div>
        <div className="text-center">
          <label htmlFor="radians">Radianes</label>
          <input type="text" onChange={convertToDegrees} value={radians}/>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1 className="text-center">Convertidor</h1>
      <header className="App-header">
       <Converter/>
      </header>
    </div>
  );
}

export default App;

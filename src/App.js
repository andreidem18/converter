import './App.css';
// import React, { useState } from 'react';

const Converter = () => {

  // No me dio la cabeza para resolverlo con estados :'(
  // const [value, setValue] = useState(0);

  function convertToRadians(event){
    let value = event.target.value;
    let answer = Math.round((value/57.296) * 1000)/1000;
    if(value <= 360 && value >= 0){
      document.getElementById('radians').value = answer;
    } else {
      alert('Lo sentimos, valor inválido');
      document.getElementById('degrees').value = `${360}`;
      document.getElementById('radians').value = `${6.283}`;
    }
  }
  function convertToDegrees(event){
    let value = event.target.value;
    let answer = Math.round((value*57.296) * 1000)/1000;
    if(value <= 6.283 && value >= 0){
      document.getElementById('degrees').value = answer;
    } else {
      alert('Lo sentimos, valor inválido');
      document.getElementById('degrees').value = `${360}`;
      document.getElementById('radians').value = `${6.283}`;
    }
  }
  return (
    <div className="center">
      <div>
        <div className="text-center">
          <label htmlFor="degrees">Grados</label>
          <input type="text" onChange={convertToRadians} id="degrees"/>
        </div>
      </div>
      <div>
        <div className="text-center">
          <label htmlFor="radians">Radianes</label>
          <input type="text" onChange={convertToDegrees} id="radians"/>
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

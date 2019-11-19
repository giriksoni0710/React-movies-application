import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Searchbox  from './Components/Searchbox'

function App() {
  return (
    <div className="App">
    <header>
      <h2 className="title">React Movies App</h2>
    </header>

<Searchbox></Searchbox>
    </div>
  );
}

export default App;

import React from 'react';
import Home from './Component/Home.js'

import './App.css';
import { fromEventPattern } from 'rxjs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Home></Home>
      </header>
    </div>
  );
}

export default App;

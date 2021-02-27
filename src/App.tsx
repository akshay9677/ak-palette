import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/buttons/Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Button>Hello </Button>
        </p>
      </header>
    </div>
  );
}

export default App;

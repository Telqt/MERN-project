import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api')
      .then(res => res.json())
      .then(data => {
        setMessage(data.message);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {message ? message : 'Loading...'}
        </p>
      </header>
    </div>
  );
}

export default App;

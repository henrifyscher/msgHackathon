import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/ping')
        .then(response => {
          setMessage(response.data);
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
  }, []);

  return (
      <div className="App">
        <header className="App-header">
          <p>{message}</p>
        </header>
      </div>
  );
}

export default App;

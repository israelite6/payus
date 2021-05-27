import React, { useCallback } from 'react';
import './App.css';

function App() {
   const handleGotoGoogle = useCallback(event => window.location.href="https://google.com", [])
  return (
    <div className="App">
      <input placeholder="search" />
      <button onClick={handleGotoGoogle} >Go</button>
    </div>
  );
}

export default App;

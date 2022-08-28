import './App.css';
import React, { useEffect } from 'react';
import grapesjs from 'grapesjs';

function App() {
  useEffect(() => {
    (async () => {
      await grapesjs.init({
        container: '#gjs',
        height: '100vh',
        width: 'auto',
        storageManager: true,
      });
    })()
  }, []);
  return (
    <div className="App">
      <div id="gjs"></div>
      <div id="blocks"></div>
    </div>
  );
}

export default App;

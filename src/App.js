import './App.css';
import ObjktRender from './components/ObjktRender';
import './styles/css/styles.css'
import React from 'react'

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Objkt.com GraphQL Test</h1>
      </header>
      <ObjktRender />
    </div>
  );
}

export default App;

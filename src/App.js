import './App.css';
import ObjktRender from './components/ObjktRender';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/css/styles.css'
import React from 'react'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ObjktRender />
      </main>
      <Footer />
    </div>
  );
}

export default App;

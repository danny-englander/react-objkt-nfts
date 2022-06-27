import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ObjktRender from './components/ObjktRender';
import './styles/css/styles.css'
import React from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <main>
        <ObjktRender />
      </main>
      <Footer />
    </div>
  );
}

export default App;

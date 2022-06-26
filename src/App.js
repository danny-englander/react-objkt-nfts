import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './styles/css/styles.css'
import React, { Suspense } from 'react';

const ObjktRender = React.lazy(() => import('./components/ObjktRender'));

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <main>
        <Suspense fallback={<div className="spinner-wrap"><div className="spinner"><span>Loading...</span></div></div>}>
          <ObjktRender />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;

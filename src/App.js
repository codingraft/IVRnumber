import { useState } from "react";
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefit from './components/Benefit';
import PlanAndPricing from './components/PlanAndPricing';
import Contact from './components/Contact';
import Slider from './components/Slider';

import Popup from './components/Popup';

function App() {
    const [showSide, setShowSide] = useState(false);

  
  return (
    <div className="App">
      <Slider showSide={showSide} setShowSide={setShowSide}/>
      <Popup />
       <Header showSide={showSide} setShowSide={setShowSide}/>
       <Hero />
       <About />
       <Features />
       <Benefit />
       <PlanAndPricing />
       <Contact />
    </div>
  );
}

export default App;

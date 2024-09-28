import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';

function App() {
  const [activeComponent, setActiveComponent] = useState('Home');

  const handleOptionClick = (option) => {
    setActiveComponent(option);
  };

  return (
    <div className="App">
      <Header />
      <div className="main-layout">
        <Sidebar onOptionClick={handleOptionClick} />
        {activeComponent === 'Home' && <Home />}
        {activeComponent === 'About' && <About />}
      </div>
    </div>
  );
}

export default App;

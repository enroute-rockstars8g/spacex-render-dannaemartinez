import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Menu } from './views/menu/component';
import { Dragons } from './components/spaceX/dragons/component';
import { Rockets } from './components/spaceX/rockets/component';
import { Ships } from './components/spaceX/ships/component';

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/dragons" element={<Dragons />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/ships" element={<Ships />} />
        {/* <Route path="*" element={<Error404 />} /> */}
      </Routes>
    </div>
  );
}

export default App;

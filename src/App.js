import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav/Nav';
import { useEffect, useState } from 'react';
import Home from './component/Home/Home';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Home></Home>
      
    </div>
  );
}

export default App;

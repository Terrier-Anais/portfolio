// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Intro from './components/Intro';
import Lang from './components/Lang';
import Proj from './components/Proj';
import Footer from './components/Footer';
import Menu from './components/Menu';
// import DropdownMenu from './components/DropdownMenu.js';


function App() {
  return (
    <Router>
    <Menu />
    <Intro />
    <Lang />
    <Proj />
    <Footer />
   </Router>
  );
}

export default App;

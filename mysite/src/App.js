// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Intro from './components/Intro';
import Lang from './components/Lang';
import Proj from './components/Proj';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <Intro />
    <Lang />
    <Proj />
    <Footer />
   </Router>
  );
}

export default App;

import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './styles/App.css';
import Navbar from './components/navbar';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;

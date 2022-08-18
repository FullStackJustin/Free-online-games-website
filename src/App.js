import React from 'react';
import './styles/App.css';
import Navbar from './components/navbar';
// import {Games} from './pages/games';
import Home from './pages/home';
import Footer from './components/footer';

export const App = () => {
  return (
    <div className="App">
        <Navbar/>
        <div className="iconBorderTop"></div>
        <Home/>
        <Footer/>
    </div>
  );
}

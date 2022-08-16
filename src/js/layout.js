import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Navbar} from './components/navbar'


export const Layout = () => {
  return(
    <div>
    <BrowserRouter basename={basename}>
      <Navbar />
    </BrowserRouter>
    </div>
  )
}

import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Navbar} from './components/navbar'


 const Layout = () => {
  return(
    <div>
    <BrowserRouter forceRefresh={true}>
      <Navbar />
    </BrowserRouter>
    </div>
  )
}
export const Layout;

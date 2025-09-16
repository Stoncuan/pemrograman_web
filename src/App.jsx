import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Route, Routes } from 'react-router-dom';


import NavbarComponent from './NavbarComponent.jsx';
import Home from './Home.jsx';
import Footer from './Footer.jsx';
import Sidebar from './Sidebar.jsx';

function App() {
  return (
    <>
    <NavbarComponent/>
      <Routes>
         <Route path='/home' element={<Home/>}/>
      </Routes>
    <Sidebar/>
    <Footer/>
    
    </>
      
  );
}

export default App

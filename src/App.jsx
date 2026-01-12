import React from 'react'
import {Route, Routes} from 'react-router';
import { Analytics } from '@vercel/analytics/react';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Shop from './Pages/Shop';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
      <Analytics />
    </div>
  )
}

export default App
import React from 'react'
// import { Analytics } from "@vercel/analytics/next.js"
import {Route, Routes} from 'react-router';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Shop from './Pages/Shop';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
      </Routes>
      {/* <Analytics /> */}
      <Footer/>
    </div>
  )
}

export default App
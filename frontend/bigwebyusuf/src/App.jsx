import React from 'react'
import {Route, Routes} from 'react-router';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Shop from './Pages/Shop';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </div>
  )
}

export default App
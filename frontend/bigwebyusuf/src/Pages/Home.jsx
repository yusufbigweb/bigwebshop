import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import TopCategories from '../components/TopCategories'
import NewArrivals from '../components/NewArrivals'

function Home() {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <TopCategories/>
        <NewArrivals/>
    </div>
  )
}

export default Home
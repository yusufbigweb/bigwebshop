import React from 'react'
import Slider from '../components/Slider'
import TopCategories from '../components/TopCategories'
import NewArrivals from '../components/NewArrivals'
import FAQ from '../components/FAQ'

function Home() {
  return (
    <div>
        <Slider/>
        <TopCategories/>
        <NewArrivals/>
        <FAQ/>

    </div>
  )
}

export default Home
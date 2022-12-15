import React from 'react'
import Carousel from './Carousel'
import Feature from './Feature'
import  Hero  from './Hero'
import MidBox from './MidBox'
import Navbar from './Navbar'
import PlanSec from './PlanSec'
import ScrollSec from './ScrollSec'
import Stats from './Stats'

const Dashboard = () => {
  return (
    <div className='m-10 '>
        <Navbar />
        <Hero />
        <MidBox />
        <Feature />
        <Carousel />
        <ScrollSec />
        <PlanSec />
        <Stats />
    </div>
  )
}

export default Dashboard
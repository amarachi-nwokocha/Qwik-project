import React from 'react'
import Carousel from './Carousel'
import Feature from './Feature'
import  Content  from './Hero'
import MidBox from './MidBox'
import Navbar from './Navbar'
import PlanSec from './PlanSec'
import ScrollSec from './ScrollSec'

const Dashboard = () => {
  return (
    <div className='m-10 '>
        <Navbar />
        <Content />
        <MidBox />
        <Feature />
        <Carousel />
        <ScrollSec />
        <PlanSec />
    </div>
  )
}

export default Dashboard
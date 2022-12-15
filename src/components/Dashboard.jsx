import React from 'react'
import Carousel from './Carousel'
import Download from './Download'
import Experience from './Experience'
import Feature from './Feature'
import Form from './Form'
import  Content  from './Hero'
import MidBox from './MidBox'
import Navbar from './Navbar'
import PlanSec from './PlanSec'
import ScrollSec from './ScrollSec'

const Dashboard = () => {
  return (
    <div className='ml-10 mr-10  '>
        <Navbar />
        <Content />
        <MidBox />
        <Feature />
        <Carousel />
        <ScrollSec />
        <PlanSec />
        <Experience />
        <Form />
        <Download />
    </div>
  )
}

export default Dashboard
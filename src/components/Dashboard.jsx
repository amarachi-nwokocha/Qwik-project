import React from 'react'
import Carousel from './Carousel'
import Download from './Download'
import Experience from './Experience'
import Feature from './Feature'
import Footer from './Footer'
import Form from './Form'
import  Content  from './Hero'
import MidBox from './MidBox'
import Navbar from './Navbar'
import PlanSec from './PlanSec'
import ScrollSec from './ScrollSec'

const Dashboard = () => {
  return (
    <div className=' '>
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
        <Footer />
    </div>
  )
}

export default Dashboard
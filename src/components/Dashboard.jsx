import React from 'react'
import Carousel from './Carousel'
import Feature from './Feature'
import  Content  from './Hero'
import MidBox from './MidBox'
import Navbar from './Navbar'

const Dashboard = () => {
  return (
    <div className='m-5'>
        <Navbar />
        <Content />
        <MidBox />
        <Feature />
        <Carousel />
    </div>
  )
}

export default Dashboard
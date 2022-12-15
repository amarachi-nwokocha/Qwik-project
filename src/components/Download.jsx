import React from 'react'
import Image1 from '../assets/iPhone 12 Mockup Front View-1.png'
import Image2 from '../assets/iPhone 12 Mockup Front View.png'
import Image3 from '../assets/iPhone 12 Mockup Front View-2.png'
const Download = () => {
  return (
    <div className='flex content-between mt-40'>
        <div className='flex content-between'>
        <img className='h-[250px] mt-10'  src={Image1} alt="" />
        <img className='h-[300px]' src={Image2} alt="" />
        <img className='h-[250px] mt-10' src={Image3} alt="" />
        </div>
        <div className=' m-40 w-[400px]'>
            <h2 className="text-blue text-semibold text-3xl">Customer-Centric, Start buying& selling in minutes</h2>
            <p>Simply download the QwikCountr application and use on any device</p>
        </div>
    </div>
  )
}

export default Download
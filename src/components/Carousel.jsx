import React from 'react'
import setUp from '../assets/Frame 35267.png'
import Phone from '../assets/iPhone 11 Pro Mockup.png'
const Carousel = () => {
  return (
   <div >
      <div className="flex justify-around">
          <div className='mt-20'>
            <h2 className="text-blue text-4xl font-semibold">
              Easy to set up
            </h2>
            <p>On board the application and get started very fast</p>
          </div>
          <div>
            <img src={setUp} className='object-cover h-80 w-70' alt="setting up workspace" />
          </div>
      </div>
      <div className='flex justify-around mt-20'>
      <div className='mt-20'>
            <h2 className="text-blue text-4xl font-semibold">
            Perfect solution for your business
            </h2>
            <p className='w-80 mt-5'>With the Black-Offic feture you ara able to better keep track of your inventory,
                avois stockouts, increase prouctivity and profit.
            </p>
            <button className='px-7 py-2 my-4 text-white border bg-gradient-to-r from-blue-960 to-blue-600 rounded-full'>Get Started</button>
          </div>
          <div>
            <img src={Phone} className='object-cover h-80 w-90' alt="setting up workspace" />
          </div>
      </div>
      <div  className='flex justify-around mt-20'>
      <div>
            <img src={Phone} className='object-cover h-80 w-90' alt="setting up workspace" />
          </div>
          <div className="mt-20">
          <h2 className="text-blue text-4xl font-semibold">
           Looking for an easy way to locte stores?
            </h2>
            <p className='w-80 mt-5 text-bold'>
                QwikCountr has made shooping easy with Geo-Shopping.<br/>
                Easily locate stores near you and get on the Qwik experience!
            </p>
            <button className='px-7 py-2 my-4 text-white border bg-gradient-to-r from-blue-960 to-blue-600 rounded-full'>Try it out</button>
         
          </div>
      </div>
        </div>
  )
}

export default Carousel
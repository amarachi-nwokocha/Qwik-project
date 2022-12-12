
import React from 'react'
import qwikFlows from '../assets/qwikphone-flow.png';

export const Content = () => {
  return (
    <div className='w-full h-screen bg-white flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
          <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
            <h1 className='text-3xl font-bold p-2 mr-2 md:text-4xl sm:text-4xl text-blue'>
                #1 Business & Inventory Management Solution
            </h1>
               <p className='p-5 text-xl'>One app that creates a seamless connection between<br/>a 
              customer and a business owner
              </p>
             
                 <div className='flex justify-between'>
                  <button className='px-7 py-2 my-4 rounded-full bg-blue-700 text-white py-1 px-6 rounded-full border'>Get Started</button>  
                  <button className='px-7 py-2 my-4'>Watch Video</button>       
                </div>         
          </div>
          <div>
            <img className='lg:p-12' src={qwikFlows} alt="qwikflows" />
          </div>
    </div>
    </div>
  )
}
export default Content
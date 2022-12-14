
import React from 'react'
import qwikFlows from '../assets/qwikphone-flow.png';
import elipse from '../assets/elipse.png'

export const Content = () => {
  return (
    <div className='w-full h-screen bg-white flex flex-col justify-between sm:w-full'>
        <div className='grid md:grid-cols-2 max-w-[1700px] m-auto'>
          <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
            <h1 className='font-medium p-3 mr-2 md:text-4xl sm:text-4xl text-blue'>
                #1 Business & Inventory<br/> Management Solution
            </h1>
               <p className='p-5'>One app that creates a seamless connection between<br/>a 
              customer and a business owner
              </p>
             
                 <div className='flex justify-between'>
                  <button className='px-7 py-2 my-4 bg-blue text-sm text-white py-1 px-6 rounded-full border'>Get Started</button>  
                  <button className='px-7 py-2 my-4 text-gray text-sm border rounded-full hover:bg-light-blue hover:text-white'>Watch Video</button>       
                </div>         
          </div>
          <div className='bg-cover' style={{backgroundImage: `url(${elipse})`}}>
            <img className='lg:p-12' src={qwikFlows} alt="qwikflows" />
          </div>
    </div>
    </div>
  )
}
export default Content
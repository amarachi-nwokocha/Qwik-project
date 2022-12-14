import React from 'react'
import setUp from '../assets/Frame 35267.png'
import Phone from '../assets/iPhone 11 Pro Mockup.png'
import character from '../assets/character.png'
import shopping from '../assets/shopping.png'
import scan from '../assets/scan.png'
const Carousel = () => {
  return (
   <div >
      <div className="flex justify-around">
          <div className='mt-20'>
            <h2 className="text-blue text-4xl font-medium p-3">
              Easy to set up
            </h2>
            <p className='p-2 text-center'>Onboard the application and get started very fast</p>
          </div>
          <div>
            <img src={setUp} className='object-cover h-80 w-70' alt="setting up workspace" />
          </div>
          
          <div>
            {/* <div className="relative" data-carousel="static" id="default-carousel">
                <div className='relative h-56 overflow-hidden rounded-lg md:h-96'>
                    <div className='hidden duration-700 ease-in-out' data-carousel-item>
                        <span className='absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800'>First Slide</span>
                        <img src={shopping} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="shopping" />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={setUp} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="setup" />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={scan} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="scanning product" />
                    </div>
                </div>
              
                <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                </div>
                
                <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div> */}
          </div>
      </div>
      <div className='flex justify-around mt-20'>
       <div className='mt-20'>
            <h2 className="text-blue text-4xl font-medium">
            Perfect solution for <br /> Your Business
            </h2>
            <p className='w-80 mt-5 text-gray'>With the Back-Office feture you are able to better keep track of your inventory,
                avoid stockouts, increase prouctivity and profit.
            </p>
            <button className='px-7 py-2 my-4 text-white border bg-blue from-blue-960 to-blue-600 rounded-full'>Get Started</button>
        </div>
          <div className='flex flex-row  float-right'>
            <img src={Phone} className='object-cover h-80 w-90' alt="setting up workspace" />
             <img src={character} className='object-cover h-60 w-90' alt="surfing" />
          </div>
          <div>
            {/* <img src={character} className='object-cover h-80 w-90' alt="surfing" /> */}
          </div>
      </div>
      <div  className='flex justify-around mt-20'>
      <div>
            <img src={Phone} className='object-cover h-80 w-90' alt="setting up workspace" />
          </div>
          <div className="mt-20">
            <h2 className="text-blue text-4xl font-medium">
              Looking for an easy way to <br />locate stores?
                </h2>
            <p className='w-80 mt-5 text-bold'>
                QwikCountr has made shooping easy with Geo-Shopping.<br/>
                Easily locate stores near you and get on the Qwik experience!
            </p>
            <button className='bg-gradient-to-r from-blue-960 to-blue-600 rounded-full px-7 py-2 my-4 text-white border '>Try it out</button>
         
          </div>
      </div>

      <div className='w-full justify-center'>
        <h1 className='font-medium text-4xl p-3 text-blue text-center'>Our Client Says</h1>
        <p className='text-gray p-2 text-center'>Amongst top business owners and shoppers in Nigeria here are some reviews about our application</p>
      </div>
   </div>
  )
}

export default Carousel
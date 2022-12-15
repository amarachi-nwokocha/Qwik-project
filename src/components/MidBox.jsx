import React from 'react'
import cart from '../assets/store_cart.png';
import store from '../assets/store_check.png'

const MidBox = () => {
  return (
    <div className=''>
      <div className="container mx-auto rounded-xl max-w-[1100px]  border p-8 m-10 flex justify-between bg-blue shadow-xl">
        <div className="col1"> 
          <div className='flex flex-row  float-right'>
            <img src={cart} alt="Cart" className='w-12' />
            <p className='text-white text-sm mt-5 p-4'>As a Qwik customer you be able to shop<br /> on the go! anywhere and everywhere</p>
          </div>
        </div>

        <div className="col2">
          <div className='flex flex-row  float-right'>
            <img src={store} alt="Cart" className='w-12' />
            <p className='text-white text-sm p-4'>Being a Qwik merchant gives you the<br/>control of your business anywhere and everywhere</p>
          </div>
        </div>
    </div>
    </div>
  )
}

export default MidBox
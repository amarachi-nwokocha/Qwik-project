import React from 'react'
import { FaSearch } from "react-icons/fa";
const Form = () => {
  return (
    <div className='bg-black '>
        <div className="text-center m-20">            
        <h2 className="text-3xl text-blue"> Ask us anything</h2>
            <p className="text-gray-800">Have any questions?we are here to assist you</p>
        </div>
        <div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
      <input type="search" class="form-control relative flex-auto  block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
      <button class="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
       <FaSearch />
      </button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Form
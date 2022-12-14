import React from "react";
import smallPic from "../assets/Frame 35224.png";
const ScrollSec = () => {
  return (
    <div >
      <div className="grid place-content-center">
        <h1 className="text-3xl text-center text-blue ">Our Clients Say</h1>
        <p>
          Amongst topbusiness owners and shoppers here are some reviews about
          our application
        </p>
      </div>
      <section class="flex overflow-x-auto rounded space-x-8 snap-x snap-mandatory">
        <div className='class="flex-shrink-0  snap-always snap-center shadow-2xl px-10 py-10 text-blue'>
          <p class="text-gray-700 w-56">
            Lorem ipsum dolor ipisicing elit. Voluptatibus quia, nulla! Maiores
            et perferendis eaque, exercitationem praesentium nihil.
          </p>
          <div className="grid place-content-center">
            <img
              src={smallPic}
              alt="person"
              className="rounded-full border-8 border-blue-600 h-20 w-20"
            />
            <p className="font-bold text-xl"> Adams Apple</p>
          </div>
        </div>
        <div className='class="flex-shrink-0 snap-always snap-center shadow-2xl px-10 py-10 text-blue'>
          <p class="text-gray-700  w-56">
            Lorem ipsum dolor ipisicing elit. Voluptatibus quia, nulla! Maiores
            et perferendis eaque, exercitationem praesentium nihil.
          </p>
          <div className="grid place-content-center">
            <img
              src={smallPic}
              alt="person"
              className="rounded-full border-8 border-blue-600 h-20 w-20"
            />
            <p className="font-bold text-xl"> Adams Apple</p>
          </div>
        </div>
        <div className='class="flex-shrink-0 snap-always snap-center shadow-2xl px-10 py-10 text-blue'>
          <p class="text-gray-700 w-56">
            Lorem ipsum dolor ipisicing elit. Voluptatibus quia, nulla! Maiores
            et perferendis eaque, exercitationem praesentium nihil.
          </p>
          <div className="grid place-content-center">
            <img
              src={smallPic}
              alt="person"
              className="rounded-full border-8 border-blue-600 h-20 w-20"
            />
            <p className="font-bold text-xl"> Adams Apple</p>
          </div>
        </div>
        <div className='class="flex-shrink-0 snap-always snap-center shadow-2xl px-10 py-10 text-blue'>
          <p class="text-gray-700 w-56">
            Lorem ipsum dolor ipisicing elit. Voluptatibus quia, nulla! Maiores
            et perferendis eaque, exercitationem praesentium nihil.
          </p>
          <div className="grid place-content-center">
            <img
              src={smallPic}
              alt="person"
              className="rounded-full border-8 border-blue-600 h-20 w-20"
            />
            <p className="font-bold text-xl"> Adams Apple</p>
          </div>
        </div>
        <div className='class="flex-shrink-0 snap-always snap-center shadow-2xl px-10 py-10 text-blue'>
          <p class="text-gray-700 w-56">
            Lorem ipsum dolor ipisicing elit. Voluptatibus quia, nulla! Maiores
            et perferendis eaque, exercitationem praesentium nihil.
          </p>
          <div className="grid place-content-center">
            <img
              src={smallPic}
              alt="person"
              className="rounded-full border-8 border-blue-600 h-20 w-20"
            />
            <p className="font-bold text-xl"> Adams Apple</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollSec;

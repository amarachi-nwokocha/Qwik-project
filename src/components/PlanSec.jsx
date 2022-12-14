import React from "react";

const PlanSec = () => {
  return (
    <div className="mt-20 grid grid-cols-3 row-gap-2">
      <div className="card w-[350px] h-[200px] bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn">Get Started</button>
        </div>
      </div>
      <div className="card w-[350px] bg-blue-600 h-[400px]bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn">Get Started</button>
        </div>
      </div>
      <div className="card w-[350px] h-[200px] bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default PlanSec;

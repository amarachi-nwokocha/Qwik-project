import React from "react";
import { FaCheck } from "react-icons/fa";
const PlanSec = () => {
  const iconStyle = { color: "green", fontSize: "15px" };
  return (
    <div>
      <div className="mt-20 grid place-content-center">
        <h1 className="text-blue text-5xl font-semibold">Our Plans</h1>
        <p className="text-lg">Flexible choices just for you</p> <br />
        <br />
        <p>Billed monthly Billed annually</p>
      </div>
      <div className="grid grid-cols-3 row-gap-2">
        <div className="card w-[300px] text-center bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="font-bold text-2xl text-green-400">Basic</h2>
            <br />
            <p>it has some text i cannot see</p> <br />
            <h1 className="font-bold text-2xl">14 Days free trial</h1>
            <div className="mt-10 grid place-content-center">
              <div className="flex justify-items-center">
                {" "}
                <FaCheck style={iconStyle} />{" "}
                <p className="ml-8">1 staff only</p>
              </div>
              <div className="flex justify-items-center">
                {" "}
                <FaCheck style={iconStyle} />{" "}
                <p className="ml-8">5 Products (5 x U's)</p>
              </div>
              <div className="flex justify-items-center">
                {" "}
                <FaCheck style={iconStyle} />{" "}
                <p className="ml-8 flex self-start">Customer App</p>
              </div>
              
            </div>
            <button className="px-3 py-2 my-4 text-white border bg-gradient-to-r from-blue-960 to-blue-600 rounded-full">
              Get Started
            </button>
          </div>
        </div>
        {/* card2 */}
        <div className="card w-[300px] text-center bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="font-bold text-2xl text-green-400">Essentials</h2>
            <br />
            <p>it has some text i cannot see</p> <br />
            <span className="flex content-center"> <h1 className="font-bold text-2xl">₦1,500 / </h1> <p>month</p></span>
           <div className="mt-10 grid place-content-center">
              <div className="flex justify-items-center">
                {" "}
                <FaCheck style={iconStyle} />{" "}
                <p className="ml-8">1 staff only</p>
              </div>
              <div className="flex justify-items-center">
                {" "}
                <FaCheck style={iconStyle} />{" "}
                <p className="ml-8">100 Products (5KU's)</p>
              </div>
              <div className="flex justify-items-center">
                {" "}
                <FaCheck style={iconStyle} />{" "}
                <p className="ml-8 flex self-start">Customer App</p>
              </div>
              <div className="flex justify-items-center">
                {" "}
                <FaCheck style={iconStyle} />{" "}
                <p className="ml-8 flex self-start">Generate PDF reports</p>
              </div>
              <div className="flex justify-items-center">
                {" "}
                <FaCheck style={iconStyle} />{" "}
                <p className="ml-8 flex self-start">Get email reports</p>
              </div>
              <div className="flex justify-items-center">
                {" "}
                <FaCheck style={iconStyle} />{" "}
                <p className="ml-8 flex self-start">Live chat support</p>
              </div>
            </div>
            <button className="px-3 py-2 my-4 text-white border bg-gradient-to-r from-blue-960 to-blue-600 rounded-full">
              Get Started
            </button>
          </div>
        </div>
        {/* card 3 */}
        <div className="card w-[300px] text-center bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="font-bold text-2xl text-green-400">Enterprise</h2>
            
            <p>it has some text i cannot see</p>
            <h1 className="font-bold text-2xl">Contact us</h1>
            <div className="mt-10 grid place-content-center">
              <div className="flex justify-items-center">
                <FaCheck style={iconStyle} />{" "}
                <p className="ml-8">Unlimited staff</p>
              </div>
              <div className="flex justify-items-center">
                {" "}
                <FaCheck style={iconStyle} />{" "}
                <p className="ml-8">Unlimited Products</p>
              </div>
              <div className="flex justify-items-center">
                {" "}
                <FaCheck style={iconStyle} />{" "}
                <p className="ml-8 flex self-start">Customer App</p>
              </div>
              <div className="flex justify-items-center">
                {" "}
                <FaCheck style={iconStyle} />{" "}
                <p className="ml-8 flex self-start">Generate PDF reports</p>
              </div>
            </div>
            <button className="px-3 py-2 my-4 text-white border bg-gradient-to-r from-blue-960 to-blue-600 rounded-full">
              Get Started
            </button>
          </div>
        </div>

        {/* cards end */}
      </div>
    </div>
  );
};

export default PlanSec;

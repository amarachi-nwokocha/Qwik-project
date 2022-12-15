import React from "react";

const PlanSec = () => {
  return (
    <div>
      <div className="place-content-center w-full text-center">
        <h1 className="font-medium text-4xl text-blue pt-10">Our Plans</h1>
        <p className="text-gray p-3 font-medium">Flexible choices just for you</p>
      </div>
      <section className="flex rounded  justify-center space-x-8 snap-x snap-mandatory">
          <div className="card w-[350px] h-[200px] bg-base-100">
            <div className="card-body border rounded-xl text-center">
            <h2 className="text-2xl text-leaf font-medium">Basic</h2>
              <p className="text-center text-sm">Perfect to get started</p>
              <p className="text-2xl font-bold p-2">14 - Days Free Trial</p>
              <ul className="text-left pl-3">
                <li className="p-2">1 Staff only</li>
                <li className="p-2">5 Products(SKU)</li>
                <li className="p-2">Customer App</li>
              </ul>
              <button className="bg-sky-blue py-3 text-white rounded-full">Get Started</button>
            </div>
          </div>
          <div className="card w-[350px] bg-blue-600 h-[200px] bg-base-100">
            <div className="card-body bg-blue text-white text-center border rounded-xl">
              <h2 className="text-2xl font-medium">Essential</h2>
              <p className="text-center text-sm">Most popular</p>
              <p className="font-light text-4xl p-2">₦<span className="text-4xl font-medium">1,500</span><small>/month</small></p>
              <ul className="text-left pl-3">
                <li className="p-2">3 Staffs</li>
                <li className="p-2">100 Products(SKU's)</li>
                <li className="p-2">Customer App</li>
                <li className="p-2">Generate PDF Report</li>
                <li className="p-2">Get Email Report</li>
                <li className="p-2">Live Chat support</li>
              </ul>

              <button className="bg-green py-3 text-white rounded-full">Get Started</button>
            </div>
          </div>
          <div className="card w-[350px] h-[200px] bg-base-100">
              <div className="card-body border rounded-xl text-center">
                  <h2 className="text-2xl text-leaf font-medium">Enterprise</h2>
                  <p className="text-center text-sm">Toolset for hard players</p>
                  <p className="text-2xl font-bold p-2">Contact Us</p>
                  <ul className="text-left pl-3">
                    <li className="p-2">Unlimited Staff</li>
                    <li className="p-2">Unlimited Products(SKU's)</li>
                    <li className="p-2">Customer App</li>
                    <li className="p-2">Generate PDF Report</li>
                    <li className="p-2">Get Email Report</li>
                    <li className="p-2">Live Chat support</li>
                  </ul>
                <button className="bg-sky-blue py-3 text-white rounded-full">Get Started</button>
              </div>
            </div>
      </section>
        {/* <div className="mt-20 grid grid-cols-3 row-gap-2">
          <div className="card w-[350px] h-[200px] bg-base-100">
            <div className="card-body border rounded-xl text-center">
            <h2 className="text-2xl text-leaf">Basic</h2>
              <p className="text-center text-sm">Perfect to get started</p>
              <p className="text-2xl font-bold p-2">14 - Days Free Trial</p>
              <ul className="text-left pl-3">
                <li className="p-2">1 Staff only</li>
                <li className="p-2">5 Products(SKU)</li>
                <li className="p-2">Customer App</li>
              </ul>
              <button className="bg-sky-blue py-3 text-white rounded-full">Get Started</button>
            </div>
          </div>
          <div className="card w-[350px] bg-blue-600 h-[200px] bg-base-100">
            <div className="card-body bg-blue text-white text-center border rounded-xl">
              <h2 className="text-2xl">Essential</h2>
              <p className="text-center text-sm">Most popular</p>
              <p className="font-light text-4xl p-2">₦<span className="text-4xl font-medium">1,500</span><small>/month</small></p>
              <ul className="text-left pl-3">
                <li className="p-2">3 Staffs</li>
                <li className="p-2">100 Products(SKU's)</li>
                <li className="p-2">Customer App</li>
                <li className="p-2">Generate PDF Report</li>
                <li className="p-2">Get Email Report</li>
                <li className="p-2">Live Chat support</li>
              </ul>

              <button className="bg-green py-3 text-white rounded-full">Get Started</button>
            </div>
          </div>
          <div className="card w-[350px] h-[200px] bg-base-100">
            <div className="card-body border rounded-xl text-center">
            <h2 className="text-2xl text-leaf">Enterprise</h2>
            <p className="text-center text-sm">Toolset for hard players</p>
            <p className="text-2xl font-bold p-2">Contact Us</p>
            <ul className="text-left pl-3">
                <li className="p-2">Unlimited Staff</li>
                <li className="p-2">Unlimited Products(SKU's)</li>
                <li className="p-2">Customer App</li>
                <li className="p-2">Generate PDF Report</li>
                <li className="p-2">Get Email Report</li>
                <li className="p-2">Live Chat support</li>
              </ul>
              <button className="bg-sky-blue py-3 text-white rounded-full">Get Started</button>
            </div>
          </div>
        </div> */}
    </div>
  );
};

export default PlanSec;

import React from "react";
import { FaRegCopyright, FaPhoneAlt, FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";
import badge from "../assets/qwikcountr.png";
import { GrLocation, GrMailOption } from "react-icons/gr";
const Footer = () => {
    const iconStyle = { color: "#0059AA", fontSize: "17px",  };
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <img src={badge} alt="" className="h-10" />
        </div>
        <div>
          <span className="text-black font-semibold">Quick Links</span>
          <a className="link link-hover text-blue">Home</a>
          <a className="link link-hover text-blue">Privacy Policy</a>
          <a className="link link-hover text-blue">Term & Conditions</a>
          <a className="link link-hover text-blue">Contact us</a>
        </div>
        <div>
          <span className="text-black font-semibold">Information</span>
          <a className="link link-hover text-blue">How to sign up?</a>
          <a className="link link-hover text-blue">Pricing</a>
          <a className="link link-hover text-blue">Qwik Features</a>
          <a className="link link-hover text-blue">FAQs</a>
        </div>
        <div>
          <span className="text-black font-semibold">Follow Us</span>
          <div className="grid grid-flow-col gap-3">
            <a style={iconStyle}> <FaFacebook /></a>
            <a style={iconStyle}><FaTwitter/></a>
            <a style={iconStyle}><FaInstagram/></a>
          </div>
          <a className="link link-hover "></a>
          <div className="text-blue w-[303px]">
            <a className="link link-hover text-blue flex text-left" >
              <GrLocation className="mt-1 mr-3 "/>
             <p className="pr-3"> Plot 23, Kusenla Road, Ikate-Elegushi,Lagos State  </p>
            </a>
          </div>
          <a className="link link-hover text-blue flex">
            <GrMailOption className="mt-1 mr-3 " style={iconStyle} /> support@qwikcountr.com
          </a>
          <a className="link link-hover text-blue flex">
            <FaPhoneAlt className="mt-1 mr-3 "/> +234-916-722-2360
          </a>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300 grid grid-flow-col place-content-center">
          <FaRegCopyright style={iconStyle}/>
          <p className="font-semi-bold text-blue">QwikCountr Limited</p>
          <p className="text-blue">All Right Reserved</p>
      </footer>
    </div>
  );
};

export default Footer;

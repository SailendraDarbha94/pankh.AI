import React, { useState } from "react";
import Link from "next/link";
import {  ProductItem } from "./ui/navbar-menu"; 

export default function MobileNavbar() {
  const [activeService, setActiveServices] = useState(false);
  const [activeClient, setActiveClient] = useState(false);
  const [activeMore, setActiveMore] = useState(false);

  const toggle1 = () => {
    setActiveServices(prevState => !prevState);
  };
  const toggle2 = () => {
    setActiveClient(prevState => !prevState);
  };
  const toggle3 = () => {
    setActiveMore(prevState => !prevState);
  };

  return (
    <div className="fixed text-xl bottom-0 w-full h-20 border-4 bg-black text-white flex gap-4 z-30 justify-evenly items-center border-gray-100 rounded-xl ">
      <div className="border-2 text-xl border-gray-100 p-2 flex justify-center items-center rounded-lg hover:bg-gray-100 hover:border-black hover:text-black w-[8rem]">
        <Link href={"/"}>Home</Link>
      </div>
      <div className="relative" onClick={toggle1} >
        <div className="hover:cursor-pointer text-xl border-2 flex justify-center items-center border-gray-100 p-2 rounded-lg w-[8rem] hover:bg-gray-100 hover:border-black hover:text-black">
          Services
        </div>
        {activeService && (
          <div className="absolute top-[-8.5rem]  rounded-xl bg-black text-white flex flex-col p-2 w-[15rem]" >
            <Link href="/services/web-development" className="border-b-2 border-gray-100 hover:bg-gray-100 hover:border-black hover:text-black">Web Development</Link>
            <Link href="/services/interface-design" className="border-b-2 border-gray-100 hover:bg-gray-100 hover:border-black hover:text-black">Interface Design</Link>
            <Link href="/services/custom-models" className="border-b-2 border-gray-100 hover:bg-gray-100 hover:border-black hover:text-black">Train Custom Models</Link>
            <Link href="/services/our-offerings" className="border-b-2 border-gray-100 hover:bg-gray-100 hover:border-black hover:text-black">Our Offerings</Link>
          </div>
        )}
      </div>
      <div className="relative" onClick={toggle2}>
        <div className="hover:cursor-pointer text-xl flex justify-center items-center w-[8rem] border-2 border-gray-100 p-2 rounded-lg hover:bg-gray-100 hover:border-black hover:text-black">
            Client
        </div>
        {activeClient && (
          <div className="absolute left-[-5rem] top-[-14.5rem] rounded-xl bg-black text-white p-2 flex gap-4 w-[20rem] border-gray-100"  >
            <ProductItem
              title="AyurYoj"
              href="https://ksdc-community.vercel.app/"
              src="/ayuryoj.png"
              description="An initiative by Karnataka State Dental Council for connecting Dentists & Clinics"
            />
            <ProductItem
              title="AmpDent"
              href="/services/web-dev"
              src="/ampdent.png"
              description="An AI powered platform for helping dental students learn"
            />
          </div>
        )}
      </div>
      <div className="relative" onClick={toggle3} >
        <div className="hover:cursor-pointer text-xl w-[8rem] flex justify-center items-center border-2 border-gray-100 p-2 rounded-lg hover:bg-gray-100 hover:border-black hover:text-black">
            More
        </div>
        {activeMore && (
          <div className="absolute top-[-6.5rem] left-[-2rem] rounded-xl bg-black text-white p-2 flex flex-col w-[12rem]" >
            <Link href="/about" className="border-b-2 border-gray-100 hover:bg-gray-100 hover:border-black hover:text-black">About Us</Link>
            <Link href="/about/faqs" className="border-b-2 border-gray-100 hover:bg-gray-100 hover:border-black hover:text-black">FAQs</Link>
            <Link href="/join" className="border-b-2 border-gray-100 hover:bg-gray-100 hover:border-black hover:text-black">Join the Waitlist</Link>
          </div>
        )}
      </div>
    </div>
  );
}

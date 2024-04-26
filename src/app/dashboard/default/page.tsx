"use client";
import { useState } from "react";
import ModalScreen from "../../../components/Modal";



const Page = () => {

    
    return(
         <div className="m-auto flex gap-1  " >

            {/* Side Bar */}

            <div className="hidden md:block z-50">
                <ModalScreen />
            </div>

            {/* Center Page */}

            <div className=" flex justify-center items-center w-full  z-50  ">

                <div className="font-serif text-lg md:text-4xl font-bold w-content h-[25%] p-4 border-2 flex justify-center items-center border-neutral-950 rounded-lg">
                    Sample Container
                </div>

            </div>

         </div>
      
    )
};

export default Page
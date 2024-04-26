"use client";
import { useState } from "react";
import ModalScreen from "../../../components/Modal";



const Page = () => {
    return(
         <div className="m-auto flex gap-1 " >

            {/* Side Bar */}

            <div>

                <ModalScreen />

            </div>

            {/* Center Page */}

            <div className="border-l-2 border-black w-screen flex justify-center items-center">

                <div className="font-serif text-4xl font-bold w-[33%] h-[33%] border-2 flex justify-center items-center border-neutral-950 rounded-lg">
                    Sample Container
                </div>

            </div>

         </div>
      
    )
};

export default Page
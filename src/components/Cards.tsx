
import React from "react";

const Cards = ({ title, Icon, description }: any) => {
  return (
    <div className="flex flex-col p-4 w-[20rem] h-[20rem]  ">
      {Icon && <Icon size={32}  className="ml-[45%] mb-2"/>} 
      <h2 className="text-white text-center font-bold text-[1.5rem] ">{title}</h2>
      <p className="mt-4 text-justify font-bold text-[1rem]">{description}</p>
    </div>
  );
};

export default Cards;

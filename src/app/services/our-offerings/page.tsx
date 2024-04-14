import { ourOfferingsContent  } from "../Constants";
import { TracingBeamWithProps } from "../TracingBeamWithProps";

import { Meteors } from "@/components/ui/meteors";



const Page = () => {
  return (
    <main className="min-h-screen w-full py-28 px-4 md:px-20">
      <div className="p-4 text-center">
      <h1 className="text-2xl md:text-5xl font-bold dark:text-white text-center">
        AI Model and How To Train Them
      </h1>
        <div className="p-2  text-lg text-justify text-content">
          <div className="flex flex-col w-full ">
            <TracingBeamWithProps props={ourOfferingsContent } />
          </div>
        </div>
       
        <Meteors number={20} />
      </div>
   
    </main>
  );
};

export default Page;
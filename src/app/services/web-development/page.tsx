import { dummyContent, } from "../Constants";
import { TracingBeamWithProps } from "../TracingBeamWithProps";

const Page = () => {
  return (
    <div className="flex flex-col w-full mt-32">
      <TracingBeamWithProps props={dummyContent} /> 
    </div>
  );
};

export default Page;


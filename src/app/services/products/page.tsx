import { dummyContent, webDevContent } from "../Constants";
import { TracingBeamWithProps } from "../TracingBeamWithProps";

const Page = () => {
  return (
    <div className="flex flex-col w-full mt-32">
      <TracingBeamWithProps props={webDevContent} />
    </div>
  );
};

export default Page;

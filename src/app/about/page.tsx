import { TextGenerateEffect } from "@/components/misc/TextGenerateEffect";
import { firstParagraphs, secondParagraphs } from "./texts";
import "../globals.css"
const Page = () => {
  const introHeader: string =
    "Welcome to Pankh.AI where we value our integrity and the customer more than money";

  return (
    <div className="flex flex-col w-full items-center mt-32 mb-40">
      <div className="w-full px-8 md:px-24 text-center">
        <TextGenerateEffect words={introHeader} />
      </div>
      {firstParagraphs.map((para: any) => {
        return (
          <div key={para.id} className="my-4">
            <p className="font-light text-lg text-justify px-8 md:px-24 text-content">
              {para.paragraph}
            </p>
          </div>
        );
      })}
      <div className="w-full px-8 md:px-24">
        <img src="/about-us.png" alt="ai" className="w-full rounded-xl" />
      </div>
      {secondParagraphs.map((para: any) => {
        return (
          <div key={para.id} className="my-4">
            <p className="font-light text-lg text-justify px-8 md:px-24 text-content">
              {para.paragraph}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Page;

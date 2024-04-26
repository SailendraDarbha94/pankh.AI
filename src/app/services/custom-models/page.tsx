"use client";

import { Button } from "@/components/ui/moving-border";
import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";
import { useState } from "react";
import { customModelsContent } from "../Constants";
import "../styles.css"
const Page = () => {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-center">Custom Large Language Model</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Use Cases",
      value: "use cases",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-center">
            From Images to Text, We have the Best
          </p>
          <DummyContent />
        </div>
      ),
    },
  ];

  const [tab, setTab] = useState<string>("Product");

  const showTabContent = () => {
    switch (tab) {
      case "Product":
        return (
          <div className="w-full text-center px-4 md:px-14 text-content mb-24">
            {customModelsContent.product_first_para}
            <hr className="my-10" />
            <Button
              disabled
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Pankh.AI
            </Button>
            <hr className="my-10" />
            {customModelsContent.product_second_para}
            <hr className="my-10" />
            {customModelsContent.product_third_para}
          </div>
        );
      case "Use Cases":
        return (
            <div className="w-full text-center px-4 md:px-14 text-content mb-24">
            {customModelsContent.use_cases_first_para}
            <hr className="my-10" />
            <Button
              disabled
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Pankh.AI
            </Button>
            <hr className="my-10" />
            {customModelsContent.use_cases_second_para}
            <hr className="my-10" />
            {customModelsContent.use_cases_third_para}
          </div>
        );
    }
  };
  return (
    <>
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
        <Tabs tabs={tabs} setDisplayedTab={setTab} />
      </div>
      <hr className="my-10" />
      {showTabContent()}
    </>
  );
};

export default Page;

const DummyContent = () => {
  return (
    <Image
      src="/landing.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

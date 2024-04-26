"use client";
import { TextGenerateEffect } from "@/components/misc/TextGenerateEffect";
import { faqs } from "../texts";
import { useState } from "react";
import "../../globals.css";

const FaqItem = ({ faq }: { faq: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-8 m-2 rounded-xl shadow-xl md:px-14 md:my-4 bg-slate-200 text-content">
      <h2 onClick={toggleAccordion} className="hover:cursor-pointer py-2">
        {faq.question}
      </h2>
      <div
        style={{
          maxHeight: isOpen ? "1000px" : "0",
          overflow: "hidden",
          transition: "max-height 1s ease",
        }}
      >
        {isOpen && <p>{faq.answer}</p>}
      </div>
    </div>
  );
};

function FaqPage({ faqs }: { faqs: any[] }) {
  return (
    <div>
      {faqs.map((faq: any) => (
        <FaqItem key={faq.id} faq={faq} />
      ))}
    </div>
  );
}

const Page = () => {
  const introHeader: string =
    "If you have any more questions, Please fill the form";
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to backend or perform validation
    console.log("Email:", email);
    console.log("Question:", question);
    // Reset form fields after submission
    setEmail("");
    setQuestion("");
  };

  return (
    <div className="min-h-screen w-full mt-32 mb-20">
      <div className="w-full px-8 md:px-24 text-center">
        <TextGenerateEffect words={introHeader} />
      </div>
      <FaqPage faqs={faqs} />
      <hr className="my-10" />

      <div className="p-4 w-full md:w-1/2 mx-auto">form to collect email and question</div>
    </div>
  );
};

export default Page;

"use client";
import { useRef, useState } from "react";
import "../globals.css";
const Page = () => {

    const [name, setName] = useState<string>("")
  return (
    <div className="w-full bg-blue-200 min-h-screen mt-32">
      <div className="p-4">
        <p className="text-content">
          Experience the future of LLM with our groundbreaking product, poised
          to revolutionize the industry. By joining our waitlist, you gain
          exclusive access to a game-changing legal tool that rivals the very
          best in the market. Imagine unlocking unparalleled efficiency,
          accuracy, and innovation in your legal workflows—all at your
          fingertips. Be among the first to harness the power of cutting-edge
          technology tailored specifically for legal professionals. Don&apos;t
          miss out on this opportunity to stay ahead of the curve and elevate
          your practice to new heights. Join our waitlist now and be part of the
          future of legal excellence.
        </p>
      </div>
      <div className="flex justify-center min-h-20 bg-red-200">
        <label htmlFor="waitlist">
          Join the waitlist
          <input
            type="text"
            name="waitlist"
            id="waitlist"
            className="rounded-md mx-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default Page;

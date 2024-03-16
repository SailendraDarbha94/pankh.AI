import Image from "next/image";
import "./globals.css";
import { Meteors } from "@/components/ui/meteors";
import { TextGenerateEffect } from "@/components/misc/TextGenerateEffect";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { products, projects } from "@/utils/constants";
import { Card, CardTitle } from "@/components/ui/small-card";

export default function Home() {
  const introHeader =
    "Welcome to Pankh.Ai, where we value customer satisfaction and integrity more than money";

  return (
    <main className="min-h-screen w-full py-28 px-4 md:px-20">
      <div className="p-4 text-center">
        {/* <TextGenerateEffect words={introHeader} /> */}

        <div className="flex w-full justify-evenly gap-2 flex-col md:flex-row">

        </div>
        <HeroParallax products={products} />
        {/* <Card>
          <CardTitle>
            Hello There
          </CardTitle>
        </Card> */}
        <Meteors number={20} />
      </div>
    </main>
  );
}

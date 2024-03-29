import Image from "next/image";
import "./globals.css";
import { Meteors } from "@/components/ui/meteors";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { IntroText, products, projects } from "@/utils/constants";
import { Card, CardTitle } from "@/components/ui/small-card";
import HomePageBottom from "@/components/misc/HomePageBottom";

export default function Home() {

  return (
    <main className="min-h-screen w-full py-28 px-4 md:px-20">
      <div className="p-4 text-center">
        <HeroParallax products={products} />
        <div className="p-2 mb-4 mt-20 text-lg text-justify text-content">
          {IntroText}
        </div>
        {/* <Card>
          <CardTitle>
            Hello There
          </CardTitle>
        </Card> */}
        <Meteors number={20} />
      </div>
      <div className="flex w-full justify-evenly gap-2 flex-col md:flex-row">
        <HomePageBottom />
      </div>
    </main>
  );
}

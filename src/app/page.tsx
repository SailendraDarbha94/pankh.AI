"use client"
import "./globals.css";
import { Spacer } from "@nextui-org/react";
import bg from "../../public/background.jpg"
import img1 from '../../public/AiModels.png'
import img2 from '../../public/Neural-Network-versus-Deep-Learning.png'
import { Meteors } from "@/components/ui/meteors";
import HighlightText from "@/components/HighlightText";
const Page = () => {
  return (
    <main className="min-h-screen py-32 px-4 md:px-20 max-w-screen-sm md:max-w-screen-2xl mx-auto " style={{ backgroundImage: `url(${bg.src})`, backgroundSize: "cover",  }}>
      <Spacer y={5} />
      <section className="w-full">
        <h1 className="text-3xl text-gray-800  font-semibold font-serif underline">
          Welcome to <span ><HighlightText text={"Pankh.AI"} /></span> where you can deploy 3 models in the space of 1
        </h1>
      </section>
      <Spacer y={10} />
      <section className="text-2xl text-gray-800  font-semibold font-serif">
        At Pankh.AI we are trying to reduce the storage space taken by a Large Language Model,
        and basically bring it down by more than 50%. In our test runs we have acheived upto 90% reduction in the size with near zero reduction in output quality
      </section>

      <Spacer y={5} />
      <section>
        <div className="text-center">
        < HighlightText  text={"What Are AI Models And How To Train Them"} />
        </div>
        <Spacer y={5} />
        <img src={`${img1.src}`} className="m-auto " />
        <div className="text-2xl text-gray-800  font-semibold font-serif">
        Artificial intelligence models are computer programs that aim to replicate aspects of human intelligence. Developers input rules (known as algorithms) that allow the program to make decisions, notice patterns, and make predictions. Successful models have a user-friendly interface. 
        </div>
      </section>

      <Spacer y={5} />
      <section>

      <div className="text-2xl text-gray-800  font-semibold font-serif underline">Neural Network vs. Deep Learning</div>
      <Spacer y={5} />
      <img src={`${img2.src}`} className="m-auto " />
      <Spacer y={5} />
      <div className="text-2xl text-gray-800  font-semibold font-serif">
      Neural Networks and Deep Learning in particular are the bedrocks on which much of modern AI applications are built, including facial recognition software, spam detection, sentiment analysis, chat bots, image generators and more. You may have heard one or both of these words used in relation to artificial intelligence and wondered what they are, and the truth is, they are pretty much different ways to describe the same thing. This image shows a simplified network architecture for a basic neural network compared to a deep learning neural network.
      </div>

      </section>
      <Spacer y={5} />
      <section>
      <div className="text-2xl text-gray-800  font-semibold font-serif underline">Supervised vs. Unsupervised Learning</div>
      <Spacer y={5} />
      <img src={`${img2.src}`} className="m-auto " />
      <Spacer y={5} />
      <div className="text-2xl text-gray-800  font-semibold font-serif">
      Supervised machine learning models are provided with the “answers” by the human initiating the model. 
      </div>
      <Spacer y={5} />
      <div className="text-2xl text-gray-800  font-semibold font-serif">
      Unsupervised machine learning models are not provided with “answers” but rather seek to uncover underlying patterns within the supplied data. 
      </div>
      </section>

      
      




      {/* <div className="p-4 text-center">
        <HeroParallax products={products} />
        <div className="p-2 mb-4 mt-20 text-lg text-justify text-content">
          {IntroText}
        </div>

        
      </div>

      <hr className="bg-indigo-900 my-10 p-1 rounded-md" />
      <div className="flex w-full justify-evenly gap-2 flex-col md:flex-row">
        <HomePageBottom />
      </div>
      <hr className="bg-indigo-900 my-10 p-1 rounded-md" />
      <GlobeDemo /> */}
      <Meteors number={20} />
    </main>
  );
}

export default Page
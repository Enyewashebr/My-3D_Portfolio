import React from "react";
import { words } from "../constants";
import Button from "../components/button";
import HeroExperience from "../components/HeroModels/HeroExperience";
// import {useGSAP} from "@gsap/react"

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-0">
        <img
          src="/images/bg.png"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="hero-layout relative flex flex-col md:flex-row items-center ">
        {/* Left: Hero content */}
        <header className="flex flex-col justify-center px-5 md:px-10 w-full md:w-1/2  z-10 ">
          <div className="flex flex-col gap-7">
            <div className="hero-text flex flex-col items-start justify-center relative z-10 pointer-events-none">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-2 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
            <p className="text-white text-sm md:text-xl relative z-10 pointer-events-none">
              Hi, I'm Enyew, a frontend developer who loves creating
              interactive, scalable web applications. My purpose is to build
              solutions that offer dynamic UI, high performance and delightful
              UX.
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="See my projects"
            />
          </div>
        </header>

        {/* Right: Hero image / 3D */}
        <figure className="hero-image w-full md:w-1/2 flex justify-center items-center  z-10 h-full mt-10 md:mt-0">
          <div className="hero-3d-layout w-full h-full min-h-[50vh]  xl:-top-20 md:top-20 xl:-right-20 right-0 pt-10 ">
            <HeroExperience />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;

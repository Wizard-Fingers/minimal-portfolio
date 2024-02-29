import React from "react";

export default function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center py-8">
      <h1 className="text-4xl mb-1 md:text-7xl md:mb-3 font-bold dark:text-white">
        Josh Rabalais
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        front end developer / web developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        I am a self-taught front-end developer. Being a self-taught developer means that you have learned how to code
        without formal education or training, yet by doing so I have relied on your
        own initiative, curiosity, and persistence to acquire the skills and
        knowledge you need to build software.
        <br></br>
        <br></br>
        Being self-taught means that I have developed a strong sense of self-discipline, resourcefulness, and problem-solving skills
        that can be valuable assets in the workplace. With dedication and hard
        work, I have achieved succes and am building a career in the tech industry.
      </p>
    </div>
  );
}

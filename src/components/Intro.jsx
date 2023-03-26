import React from "react";

export default function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center py-8">
      <h1 className="text-4xl mb-1 md:text-7xl md:mb-3 font-bold dark:text-white">
        Name
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        developer/ web developer/ whatever you want
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        Being a self-taught developer means that you have learned how to code
        without formal education or training. Instead, you have relied on your
        own initiative, curiosity, and persistence to acquire the skills and
        knowledge you need to build software. Self-taught developers often face
        unique challenges, such as filling gaps in their knowledge, staying
        up-to-date with new technologies, and building a portfolio of work to
        demonstrate their skills.
        <br />
        However, being self-taught also means that you have developed a strong
        sense of self-discipline, resourcefulness, and problem-solving skills
        that can be valuable assets in the workplace. With dedication and hard
        work, self-taught developers can achieve success and build rewarding
        careers in the tech industry.
      </p>
    </div>
  );
}

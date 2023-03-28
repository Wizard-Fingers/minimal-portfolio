import React from "react";
// useEffect hook for dark mode
import { useEffect, useState } from "react";
// components imported
import Intro from "./components/intro.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Timeline from "./components/Timeline.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Review from "./components/Review.jsx";
// importing your CV
import pdf from "/assets/pdf/CV.pdf";
//importing your profile picture (if you want one)
import profile from "/assets/main-pic.png";
function App() {
  // dark mode stats and code for dark mode
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const sun = (
    <svg
      xmlns="http://www.w3.owwg/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );

  const moon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="white"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );
  // CV button
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = pdf;
    link.download = "CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white dark:bg-stone-900">
      <div className="flex justify-between p-2 ">
        <button
          type="button"
          onClick={handleThemeSwitch}
          className="p-2 z-10 bg-stone-900 dark:bg-stone-200 text-lg rounded-md md:fixed md:right-8 right-2 top-4 w-8 h-8 flex justify-center items-center"
        >
          {theme === "dark" ? sun : moon}
        </button>
        <button
          type="button"
          onClick={handleDownloadCV}
          className="pt-[1px] z-10 bg-stone-900 dark:bg-stone-200 text-white dark:text-stone-900 rounded-md md:fixed md:left-8 left-2 top-4 w-8 h-8 flex justify-center items-center text-sm "
        >
          CV
        </button>
      </div>
      <div
        className="bg-white
     min-h-screen  mx-auto dark:bg-stone-900 text-stone-900 dark:text-stone-300"
      >
        <div className="max-w-5xl w-11/12 mx-auto ">
          {/*profile picture placement*/}
          <div className="flex justify-center">
            <img
              src={profile}
              alt="profile"
              className="w-32 h-32 rounded-full object-cover mt-8 dark:bg-white"
            />
          </div>
          <Intro />  
          <Timeline />
          <Portfolio />
          <Review />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

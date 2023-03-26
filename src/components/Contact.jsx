import React from "react";
import Title from "./Title.jsx";
export default function Contact() {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          // I got this form from https://getform.io/ sign up for a free account and create a form
          // then copy the url and paste it in a .env file in the root of your project
          // then add the .env file to your .gitignore file
          //then in your .env file add VITE_APP_FORM_URL=your-form-url
          //then in your code you can use import.meta.env.VITE_APP_FORM_URL
          action={import.meta.env.VITE_APP_FORM_URL}
          method="POST"
          className="flex flex-col w-full md:w-1/2"
        >
          <Title>Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border-2 border-stone-900 dark:border-white rounded-md p-2 my-2 focus:outline-none bg-transparent"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 border-stone-900 dark:border-white border-2 rounded-md p-2 focus:outline-none bg-transparent"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 border-stone-900 dark:border-white bg-transparent border-2 rounded-md focus:outline-none"
          />
          <button
            type="submit"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-stone-900 bg-gradient-to-r from-stone-500 to-gray-200 drop-shadow-md hover:from-stone-600 hover:to-gray-300 hover:text-white"
          >
            Work With Me
          </button>
        </form>
      </div>
    </div>
  );
}

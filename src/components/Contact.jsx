import React from "react";
import Title from "./Title.jsx";
// added axios to handle form submission
import axios from "axios";

export default function Contact() {
  // add event listener to form
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await axios.post(
        import.meta.env.VITE_APP_FORM_URL,
        formData
      );
      console.log(response); // log the response for debugging purposes
      // show a success message to the user
    } catch (error) {
      console.error(error); // log the error for debugging purposes
      // show an error message to the user
    }
  };
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          method="POST"
          className="flex flex-col w-full md:w-1/2"
          onSubmit={handleSubmit} // add event listener
        >
          <div className="mt-2">
            <Title>Contact</Title>
          </div>
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

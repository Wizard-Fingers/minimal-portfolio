import React, { useState } from "react";
import Title from "./Title.jsx";
// added axios to handle form submission
import axios from "axios";

export default function Contact() {
  // add state to handle form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // email validation regex pattern
  const emailRegex = /\S+@\S+\.\S+/;

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
      setFormData({
        name: "",
        email: "",
        message: "",
      }); // reset form data to empty strings
      setIsFormSubmitted(true); // set form submitted state to true
      // show a success message to the user
    } catch (error) {
      console.error(error); // log the error for debugging purposes
      // show an error message to the user
    }
  };
  // add state to handle form data and update it on change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // add validation to email field
  const isEmailValid = emailRegex.test(formData.email);

  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          method="POST"
          className="flex flex-col w-full md:w-1/2"
          onSubmit={handleSubmit} // add event listener
        >
          <div className="mt-2">
            <Title className="text-center">
              {isFormSubmitted
                ? `${formData.name} Name get back to you ASAP.`
                : "Contact"}
            </Title>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border-2 border-stone-900 dark:border-white rounded-md p-2 my-2 focus:outline-none bg-transparent"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 border-stone-900 dark:border-white border-2 rounded-md p-2 focus:outline-none bg-transparent"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {!isEmailValid && formData.email.length > 0 && (
            <p className="text-red-500 text-sm">
              Please enter a valid email address
            </p>
          )}
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="my-4 p-2 mb-4 border-stone-900 dark:border-white bg-transparent border-2 rounded-md focus:outline-none"
            value={formData.message}
            onChange={handleChange}
            required
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

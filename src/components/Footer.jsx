import React from "react";

export default function Footer() {
  return (
    <div className="py-5 text-center">
      <hr className="mb-4" />
      {/* add some Icons here for yourself */}
      <p className="text-sm mt-2 opacity-50 dark:text-white">
        &copy; {new Date().getFullYear()} - Josh Rabalais
      </p>
    </div>
  );
}

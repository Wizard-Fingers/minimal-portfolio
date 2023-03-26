import React from "react";

export default function Title({ children, id }) {
  return (
    <h2
      id={id && id}
      className="text-2xl font-semibold underline underline-offset-8 text-stone-900 dark:text-white mb-5"
    >
      {children}
    </h2>
  );
}

import React from "react";

export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="bg-blue-600 px-4 py-2 mt-2 rounded hover:bg-blue-700 text-white font-semibold transition duration-200 ease-in-out"
    >
      {children}
    </button>
  );
}

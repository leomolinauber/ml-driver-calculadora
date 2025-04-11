import React from "react";

export default function Card({ children, title }) {
  return (
    <div className="bg-zinc-800 p-4 rounded-xl shadow-md w-full max-w-md">
      {title && <h2 className="text-lg font-semibold mb-2">{title}</h2>}
      {children}
    </div>
  );
}

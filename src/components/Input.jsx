import React from "react";

export default function Input(props) {
  return (
    <input
      className="w-full p-2 rounded bg-zinc-700 border border-zinc-600 text-white mb-2"
      {...props}
    />
  );
}

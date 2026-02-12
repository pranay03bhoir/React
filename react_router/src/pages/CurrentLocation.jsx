import React from "react";
import { useLocation } from "react-router";

const CurrentLocation = () => {
  const location = useLocation();
  return (
    <div className="flex justify-center pt-4 pb-4 bg-pink-300">
      <div className="bg-linear-to-r from-indigo-100 via-purple-100 to-pink-100 rounded-xl px-6 py-3 shadow-md">
        <h2 className="text-lg md:text-xl font-semibold text-indigo-700 flex items-center gap-2">
          <svg
            className="w-5 h-5 text-indigo-400"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z"
            />
          </svg>
          Current Location:{" "}
          <span className="ml-1 text-purple-500">{location.pathname}</span>
        </h2>
      </div>
    </div>
  );
};

export default CurrentLocation;

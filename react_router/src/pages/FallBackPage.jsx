import React from "react";
import { Link } from "react-router";

const FallBackPage = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-indigo-200 via-purple-100 to-pink-200">
      <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl px-10 py-16 flex flex-col items-center">
        <svg
          className="mb-7"
          width="72"
          height="72"
          fill="none"
          viewBox="0 0 72 72"
        >
          <circle cx="36" cy="36" r="36" fill="#FDE68A" />
          <path
            d="M25 47h22M36 27v10M36 41.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
            stroke="#EF4444"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-3">404</h1>
        <h2 className="text-2xl font-bold text-indigo-600 mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-md">
          The page you’re looking for doesn’t seem to exist.<br />
          Maybe it wandered off for a coffee break. <span role="img" aria-label="coffee">☕</span>
        </p>
        <Link
          to="/"
          className="px-6 py-3 rounded-md bg-linear-to-r from-pink-400 via-indigo-400 to-yellow-300 text-white font-semibold text-lg shadow-md transition-transform hover:scale-105"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default FallBackPage;
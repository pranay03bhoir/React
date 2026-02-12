import React from "react";

export const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-pink-100 via-yellow-100 to-amber-200">
      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl max-w-lg w-full px-10 py-14 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-pink-600 drop-shadow">
          Contact Us
        </h1>
        <p className="text-gray-700 mb-8 text-lg">
          We'd love to hear from you. Fill out the form and we'll get back to you soon!
        </p>
        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Your Name"
            className="rounded-lg px-4 py-3 border border-pink-200 focus:ring-2 focus:ring-pink-300 outline-none transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="rounded-lg px-4 py-3 border border-pink-200 focus:ring-2 focus:ring-pink-300 outline-none transition"
          />
          <textarea
            placeholder="Your Message"
            className="rounded-lg px-4 py-3 border border-pink-200 focus:ring-2 focus:ring-pink-300 outline-none transition min-h-[120px] resize-y"
          />
          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg transition-all duration-200"
          >
            Send Message
          </button>
        </form>
        <div className="mt-8 flex justify-center gap-8 text-2xl text-pink-500">
          <a href="mailto:info@example.com" className="hover:text-pink-800 transition">
            <span role="img" aria-label="Email">
              📧
            </span>
          </a>
          <a href="tel:+1234567890" className="hover:text-pink-800 transition">
            <span role="img" aria-label="Phone">
              📞
            </span>
          </a>
          <a href="https://twitter.com" className="hover:text-pink-800 transition" target="_blank" rel="noopener noreferrer">
            <span role="img" aria-label="Twitter">
              🐦
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

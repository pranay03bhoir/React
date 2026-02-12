import React from "react";
import { Link, Outlet, useSearchParams } from "react-router";
const About = () => {
  // This is a react function/feature.
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  const topic = searchParams.get("topic") || "general";
  // This is a pure javaScript function/feature.
  const urlParams = new URLSearchParams(window.location.search);
  const topicFromUrl = urlParams.get("topic");
  console.log("useSearchParam: ", topic);
  console.log("useSearchParamUrl: ", topicFromUrl);

  const handleTopic = (newTopic) => {
    setSearchParams({ topic: newTopic });
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-pink-200 via-amber-100 to-yellow-100">
        <div className="bg-white/70 backdrop-blur-md shadow-2xl rounded-2xl p-12 max-w-2xl w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold text-pink-700 mb-4 drop-shadow">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-gray-800 mb-6 leading-relaxed font-medium">
            Welcome to our vibrant and creative space, where inspiration meets
            innovation! <br />
            We are a passionate team of dreamers, builders, and explorers
            dedicated to crafting beautiful web experiences.
          </p>
          <div className="pb-8">
            <h2 className="font-semibold text-2xl text-gray-800 mb-3 text-center">
              Choose a topic
            </h2>
            <div className="flex gap-7 justify-center">
              <button
                onClick={() => handleTopic("Team")}
                className="flex flex-col items-center px-6 py-3 rounded-xl shadow-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Team
              </button>
              <button
                onClick={() => handleTopic("Mission")}
                className="flex flex-col items-center px-6 py-3 rounded-xl shadow-lg bg-pink-600 hover:bg-pink-700 text-white font-bold text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
              >
                Mission
              </button>
              <button
                onClick={() => handleTopic("Vision")}
                className="flex flex-col items-center px-6 py-3 rounded-xl shadow-lg bg-red-600 hover:bg-red-700 text-white font-bold text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-300"
              >
                Vision
              </button>
            </div>
            <div className="flex justify-center items-center mt-4">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-linear-to-r from-pink-300 via-yellow-200 to-amber-200 text-pink-900 shadow font-semibold text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-pink-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Current Topic:{" "}
                <span className="font-bold text-pink-700 capitalize">
                  {topic}
                </span>
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-1 bg-pink-100/70 rounded-xl p-6 shadow-lg hover:scale-105 transition-all duration-300 border-t-4 border-pink-300">
              <h2 className="text-xl font-bold text-pink-900 mb-2">
                Our Mission
              </h2>
              <p className="text-gray-700">
                To empower creators and build unique digital destinations filled
                with color, interactivity, and joy. We believe the web should be
                inviting, expressive, and accessible for all!
              </p>
            </div>
            <div className="flex-1 bg-amber-100/60 rounded-xl p-6 shadow-lg hover:scale-105 transition-all duration-300 border-t-4 border-amber-300">
              <h2 className="text-xl font-bold text-yellow-900 mb-2">
                Our Values
              </h2>
              <p className="text-gray-700">
                Creativity. Integrity. Collaboration. Continuous Learning.
                <br />
                We blend imagination and technology to deliver delightful user
                experiences.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
            <Link
              to="/about/team"
              className="flex-1 text-center py-3 rounded-lg bg-pink-200 hover:bg-pink-300 text-pink-900 font-semibold shadow-md transition-colors duration-200 text-lg"
            >
              Meet our team
            </Link>
            <Link
              to="/"
              className="flex-1 text-center py-3 rounded-lg bg-yellow-100 hover:bg-yellow-200 text-yellow-800 font-semibold shadow-md transition-colors duration-200 text-lg"
            >
              Go back home
            </Link>
          </div>
          <div className="text-md text-gray-700 text-center font-medium">
            Want to know more or join our adventure?{" "}
            <span className="font-semibold text-pink-600">
              <Link to={`/contact`}>Let’s connect!</Link>
            </span>
          </div>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default About;

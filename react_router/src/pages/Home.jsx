import React from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-amber-200 via-yellow-100 to-pink-100">
      <div className="bg-white/50 backdrop-blur p-12 rounded-2xl shadow-2xl max-w-xl w-full text-center">
        <h1 className="text-5xl font-bold mb-6 text-pink-600 drop-shadow-lg">
          Welcome Home!
        </h1>
        <p className="text-lg text-gray-700 mb-8 font-medium">
          This is your beautiful new homepage.
          <br />
          Explore and enjoy the colorful vibe!
        </p>
        <div className="flex justify-center gap-6">
          <button
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-lg text-lg font-semibold shadow-md transition-all duration-200"
            onClick={handleLogin}
          >
            Login
          </button>
          <button className="bg-white/80 hover:bg-yellow-300 text-pink-800 border border-pink-200 px-6 py-2 rounded-lg text-lg font-semibold shadow cursor-pointer transition-all duration-200">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

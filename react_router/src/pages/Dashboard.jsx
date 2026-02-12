import React from "react";
import { useNavigate } from "react-router";

export const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <div className="min-h-screen bg-linear-to-tr from-pink-100 via-amber-100 to-yellow-50 p-8">
      <header className="mb-10 flex items-center justify-between">
        <h1 className="text-4xl font-extrabold text-pink-700 drop-shadow">
          Dashboard
        </h1>
        <button
          className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg shadow font-semibold transition"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div className="bg-white/70 backdrop-blur-lg p-7 rounded-2xl shadow-xl border-t-4 border-pink-300 hover:scale-105 transition-all duration-200">
          <h2 className="text-xl font-bold text-pink-800 mb-2">Active Users</h2>
          <p className="text-5xl font-extrabold text-pink-500 mb-2">1,245</p>
          <span className="text-green-500 font-bold">+4.2% Today</span>
        </div>
        <div className="bg-white/70 backdrop-blur-lg p-7 rounded-2xl shadow-xl border-t-4 border-amber-300 hover:scale-105 transition-all duration-200">
          <h2 className="text-xl font-bold text-yellow-800 mb-2">Revenue</h2>
          <p className="text-5xl font-extrabold text-yellow-500 mb-2">$9,280</p>
          <span className="text-green-500 font-bold">
            +2.1% Since Yesterday
          </span>
        </div>
        <div className="bg-white/70 backdrop-blur-lg p-7 rounded-2xl shadow-xl border-t-4 border-indigo-300 hover:scale-105 transition-all duration-200">
          <h2 className="text-xl font-bold text-indigo-800 mb-2">Tasks Done</h2>
          <p className="text-5xl font-extrabold text-indigo-500 mb-2">39</p>
          <span className="text-red-500 font-bold">-1 This Week</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Announcements */}
        <div className="bg-white/70 rounded-2xl shadow-xl p-7 border border-dashed border-pink-200">
          <h3 className="text-2xl font-extrabold text-pink-700 mb-4">
            Announcements
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-pink-300 mt-1"></span>
              <span className="text-pink-600 font-medium">
                🎉 New features arriving next week!{" "}
                <span className="bg-pink-100 px-2 py-1 rounded-lg ml-1 text-xs font-semibold">
                  NEW
                </span>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-yellow-300 mt-1"></span>
              <span className="text-yellow-700 font-medium">
                🛠 Scheduled maintenance on Sunday 2AM
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-indigo-300 mt-1"></span>
              <span className="text-indigo-600 font-medium">
                📈 Reach your weekly goals for a surprise!
              </span>
            </li>
          </ul>
        </div>
        {/* Recent Activity */}
        <div className="bg-white/70 rounded-2xl shadow-xl p-7 border border-dashed border-amber-100">
          <h3 className="text-2xl font-extrabold text-yellow-600 mb-4">
            Recent Activity
          </h3>
          <ul className="divide-y divide-amber-100">
            <li className="py-3 flex justify-between items-center">
              <span className="text-amber-700 font-semibold">
                ✅ Completed onboarding task.
              </span>
              <span className="text-sm text-gray-400">2 min ago</span>
            </li>
            <li className="py-3 flex justify-between items-center">
              <span className="text-amber-700 font-semibold">
                🚀 Upgraded account to PRO.
              </span>
              <span className="text-sm text-gray-400">11 min ago</span>
            </li>
            <li className="py-3 flex justify-between items-center">
              <span className="text-amber-700 font-semibold">
                ✏️ Edited project details.
              </span>
              <span className="text-sm text-gray-400">45 min ago</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

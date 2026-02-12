import React from "react";
import { Outlet } from "react-router";

const teamMembers = [
  {
    name: "Jane Doe",
    role: "Team Lead",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Visionary leader with a passion for innovation and collaboration.",
  },
  {
    name: "John Smith",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Crafts delightful user experiences with clean, accessible code.",
  },
  {
    name: "Emily Chen",
    role: "Backend Developer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    bio: "Loves building robust APIs and scalable systems.",
  },
  {
    name: "Carlos Ruiz",
    role: "Designer",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    bio: "Transforms bright ideas into stunning, usable designs.",
  },
];

const Team = () => {
  return (
    <section className="py-12 bg-linear-to-br from-blue-50 to-indigo-100 min-h-[85vh]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-indigo-700">
          Meet Our Team
        </h2>
        <p className="mt-4 text-lg text-indigo-500 max-w-2xl mx-auto">
          A talented group of professionals committed to excellence and
          teamwork.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center hover:-translate-y-2 transition duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-28 h-28 object-cover rounded-full border-4 border-indigo-200 shadow mb-5"
            />
            <h3 className="text-2xl font-bold text-indigo-700">
              {member.name}
            </h3>
            <span className="text-indigo-400 font-medium mb-2">
              {member.role}
            </span>
            <p className="text-indigo-500 text-center text-base">
              {member.bio}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;

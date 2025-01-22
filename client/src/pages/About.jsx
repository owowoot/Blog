import React from "react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-3">
      {/* Profile Picture */}
      <img
        src="/images/Richard-pfp.png"
        alt="Profile"
        className="w-32 h-32 rounded-full object-cover mb-5"
      />

      {/* Bio Section */}
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-semibold my-5">
          Hi, I'm Richard. Welcome to my blog!
        </h1>
        <div className="text-md text-gray-500 flex flex-col gap-6">
          <p>
            This blog was created as a personal project to share my thoughts and
            ideas with the world. I am an aspiring web developer who loves
            talking about fitness, nutrition, and everything in between.
          </p>
          <p>
            On this blog, you'll find weekly articles and updates on topics such
            as running, climbing, and what I'm learning as a software engineer.
            I'm always learning and exploring new research in the field of
            health and fitness on the side so be sure to check out the new
            topics I share!
          </p>
          <p>
            I encourage you to leave comments on our posts and engage with other
            readers. You can like other people's comments and reply to them as
            well. I believe that a community of learners can help each other
            grow and improve.
          </p>
        </div>
      </div>
    </div>
  );
}

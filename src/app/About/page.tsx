import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* About Section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
              src="/images/profile.jpg" // Replace with your image path
              alt="Profile"
              className="w-48 h-48 rounded-full object-cover"
            />
          </div>

          {/* About Text */}
          <div className="md:max-w-xl">
            <h1 className="text-4xl font-semibold text-gray-900 mb-4">About Me</h1>
            <p className="text-lg text-gray-700 mb-4">
              Hey there! Im <strong>Malik Shahzad</strong> a passionate web developer and tech enthusiast.
              My journey into the world of web development began a few years ago and since then Ive been
              fascinated by the endless possibilities of creating intuitive and beautiful websites.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Through this blog I aim to share my knowledge, experiences, and tips on web development
              covering topics like HTML CSS JavaScript React and more. Whether youre a beginner or an
              advanced developer my goal is to help you grow your skills and stay updated with the latest trends
              in the tech world.
            </p>
            <p className="text-lg text-gray-700">
              Thanks for stopping by, and I hope you find something useful here!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default AboutPage
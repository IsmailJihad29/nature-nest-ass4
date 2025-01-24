// Heading.tsx

import React from 'react';

interface HeadingProps {
  heading: string;
  tag: string;
}

const Heading: React.FC<HeadingProps> = ({ heading, tag }) => {
  return (
    <div className="text-center py-8 px-5 relative max-w-6xl mx-auto">
      <h1 className="md:text-5xl text-3xl mb-4">🌱<span className='text-heading'>{heading}</span></h1>
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <span className="animate-pulse w-36 h-36 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 blur-3xl rounded-full opacity-50"></span>
        <span className="absolute w-16 h-16 rounded-full bg-yellow-400 blur-xl opacity-60 left-10 top-10 animate-spin-slow"></span>
        <span className="absolute w-24 h-24 rounded-full bg-blue-500 blur-2xl opacity-40 right-10 bottom-10 animate-bounce"></span>
      </div>

      <p className="text-md md:text-2xl font-bold text-gray-800 px-5 py-4 rounded-full shadow-md border border-gray-200 hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 font-title max-w-6xl mx-auto">
        {tag}
      </p>
    </div>
  );
};

export default Heading;

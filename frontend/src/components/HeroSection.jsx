import React from 'react';
import blogimg from '../assets/imgs/blog-home.jpg'
import { NavLink } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="px-2 py-32">
      <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
        <div className="flex flex-wrap items-center sm:-mx-3">
          <div className="w-full md:w-1/2 md:px-3">
            <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline">Want to be heard...</span>
                <span className="block text-slate-900 xl:inline">Create a blog</span>
              </h1>
              <p className="mx-auto text-base text-white sm:max-w-md lg:text-xl md:max-w-3xl">
                Share your story with the world. Create a beautiful, personalized blog that fits your brand. Grow your audience with built-in marketing tools, or transform your passion into revenue by gating access with a paywall.
              </p>
              <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                <NavLink to="/blogcreate" className=" flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto">
                  Create
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </NavLink>
                <NavLink to="/learn-more" className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
                  Learn More
                </NavLink>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
              <img src={blogimg} className="w-full h-96 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
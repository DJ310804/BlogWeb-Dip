import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';

const cards = [
  {
    image: 'https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Simplest Salad Recipe Ever',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    category: 'Cooking',
    likes: 39,
    time: '6 mins ago',
  },
  {
    image: 'https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Best FastFood Ideas (Yummy)',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    category: 'Cooking',
    likes: 130,
    time: '10 days ago',
  },
  {
    image: 'https://images.pexels.com/photos/6086/food-salad-healthy-vegetables.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Why to Eat Salad?',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    category: 'Cooking',
    likes: 9,
    time: '16 hours ago',
  },
];

function Slider() {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="border-b mb-5 flex justify-between text-sm">
        <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
          {/* Replace this with your SVG icon */}
          <svg
            className="h-6 mr-3"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
            style={{ enableBackground: 'new 0 0 24 24' }}
            xmlSpace="preserve"
          >
            {/* Placeholder SVG content */}
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <a href="#" className=" font-semibold inline-block">Cooking Blog</a>
        </div>
        <a href="#">See All</a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {cards.map((card, index) => (
          <div key={index} className="relative rounded overflow-hidden shadow-lg flex flex-col">
            <a href="#">
              <img
                className="w-full"
                src={card.image}
                alt={card.title}
              />
              <div className="absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25 hover:opacity-0 transition duration-300" />
            </a>
            <div className="absolute top-0 right-0 mt-3 mr-3 bg-indigo-600 px-4 py-2 text-white text-xs font-medium hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              {card.category}
            </div>
            <div className="px-6 py-4 mb-auto">
              <a href="#" className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">
                {card.title}
              </a>
              <p className="text-gray-800 text-sm">{card.description}</p>
            </div>
            <div className="px-6 py-3 flex items-center justify-between bg-gray-100">
              <span className="py-1 text-xs font-regular text-gray-900 flex items-center">
                {/* Replace this with your SVG icon */}
                <svg
                  height="13px"
                  width="13px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 24 24"
                  style={{ enableBackground: 'new 0 0 24 24' }}
                  xmlSpace="preserve"
                >
                  {/* Placeholder SVG content */}
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <span className="ml-1">{card.time}</span>
              </span>
              <span className="py-1 text-xs font-regular text-gray-900 flex items-center">
                <FaThumbsUp className="h-5" />
                <span className="ml-1">{card.likes} Likes</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;

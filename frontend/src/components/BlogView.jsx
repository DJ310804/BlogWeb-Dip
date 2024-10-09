import React, { useState } from 'react';

const BlogView = ({
  title,
  author,
  date,
  category,
  content,
  imageUrl,
  tags = []
}) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleLike = () => setLikes(likes + 1);
  const handleAddComment = () => {
    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <div className="w-full flex flex-col justify-center">
      <div
        className="bg-cover bg-center text-center overflow-hidden"
        style={{
          height: '250px',
          backgroundImage: `url('${imageUrl}')`
        }}
        title={title}
      >
      </div>
      <div className="w-full max-w-full mx-auto p-5 sm:p-10 md:p-16">
        <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div className="bg-white relative p-5 sm:p-10">
            <h1 className="text-gray-900 font-bold text-3xl mb-2">{title}</h1>
            <p className="text-gray-700 text-xs mt-2">
              Written By:
              <a
                href="#"
                className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                {author}
              </a> In
              <a
                href="#"
                className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                {category}
              </a>,
              <span className="text-xs text-gray-500 ml-2">{date}</span>
            </p>

            <div className="flex flex-wrap justify-between">
              <div className="w-full md:w-3/4 pr-5">
                {/* Content */}
                <p className="text-base leading-8 my-5">{content}</p>
                {/* <h3 className="text-2xl font-bold my-5">#1. What is Lorem Ipsum?</h3>
                <p className="text-base leading-8 my-5">{content}</p>
                <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">{content}</blockquote>
                <p className="text-base leading-8 my-5">{content}</p> */}
              </div>
              <div className="w-full md:w-1/4 pl-5 md:pl-5 md:mt-0 mt-5">
                <div className="flex flex-col">
                  <div className="flex justify-between mb-5">
                    <button
                      onClick={handleLike}
                      className="mr-3 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Like {likes}
                    </button>
                    <span className="text-gray-500">Comments ({comments.length})</span>
                  </div>
                  <div className="bg-gray-100 p-5 rounded mb-5">
                    <h4 className="text-lg font-bold mb-2">Previous Comments</h4>
                    <ul>
                      {comments.map((comment, index) => (
                        <li key={index} className="text-base leading-8 my-2">{comment}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-100 p-5 rounded">
                    <h4 className="text-lg font-bold mb-2">Add a Comment</h4>
                    <textarea
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="w-full p-2 pl-10 text-sm text-gray-700"
                      placeholder="Add a comment..."
                    />
                    <button
                      onClick={handleAddComment}
                      className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      Comment
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5">
              {tags.length > 0 && tags.map(tag => (
                <a
                  key={tag}
                  href="#"
                  className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out mr-2"
                >
                  #{tag}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogView;
import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';

function BlogCreate() {
  useAuth();
  const [formData, setFormData] = useState({
    blogName: '',
    author: '',
    blogDescription: '',
    blogImage: null,
    category: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data:', formData);
    // You can also make an API call to save the data here
    window.location.reload();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    setFormData({ ...formData, blogImage: event.target.files[0] });
  };

  const categories = [
    'Technology',
    'Fashion',
    'Travel',
    'LifeStyle',
    'Sports',
    'Finance',
  ];

  return (
    <div className="flex justify-center items-center pt-20 h-screen mb-6">
      <div className="formcard  px-10 py-10 rounded-3xl border-2 border-gray-200 w-1/2 mt-10">
        <h1 className="text-4xl font-semibold flex justify-center items-center ">Create  Blog</h1>
        <form onSubmit={handleSubmit}>
          <div className="mt-6">
            <div className=' mt-5'>
              <label className="text-2xl font-medium">Blog Name</label>
              <input
                className="w-full border-2 border-gray-400 rounded-xl p-3 "
                type="text"
                placeholder="Blog Title"
                name="blogName"
                value={formData.blogName}
                onChange={handleInputChange}
              />
            </div>
            <div className=' mt-5'>
              <label className="text-2xl font-medium ">Author</label>
              <input
                className="w-full border-2 border-gray-400 rounded-xl p-3 "
                type="text"
                placeholder="Author Name"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-2xl font-medium mb-2 mt-5" htmlFor="blogDescription">
                Type Here...
              </label>
              <textarea
                name="blogDescription"
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                id="blogDescription"
                rows="10"
                value={formData.blogDescription}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="flex justify-between align-center mb-2">
              <div className="w-1/2 pr-2">
                <label className="block text-2xl font-medium " htmlFor="blogImage">
                  Image
                </label>
                <input
                  type="file"
                  id="blogImage"
                  name="blogImage"
                  accept="image/*"
                  className="w-full p-4  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mt-3"
                  onChange={handleFileChange}
                />
              </div>
              <div className="w-1/2 pl-2">
                <label className="block text-2xl font-medium ">Category</label>
                <select
                  className="w-full border-2 border-gray-400 rounded-xl p-3 mt-3 "
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                >
                  <option value="">Select Category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
              <button
                type="submit"
                className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-3xl bg-violet-500 text-white text-lg font-bold "
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BlogCreate;
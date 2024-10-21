import React, { useState } from 'react';
import axios from 'axios';

const CreateArticle = ({ token, setMessage }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleCreateArticle = async (e) => {
    console.log('token', token);
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://wealthy-spirit-5c2093b6cd.strapiapp.com/api/articles',
        {
          data: {
            title,
            description: content
          }
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      setMessage('Article created successfully!');
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error creating article:', error.response?.data || error.message);
      setMessage('Failed to create article: ' + (error.response?.data?.error?.message || error.message));
    }
  };

  return (
    <form onSubmit={handleCreateArticle} className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Create Article</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="block w-full p-2 mb-2 border rounded"
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="block w-full p-2 mb-2 border rounded"
        required
        rows="4"
      ></textarea>
      <button type="submit" className="bg-purple-500 text-white p-2 rounded">Create Article</button>
    </form>
  );
};

export default CreateArticle;
import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';
import { redirect } from 'react-router-dom';

export const CreateArticle: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');
  const { token, isAuthenticated } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://wealthy-spirit-5c2093b6cd.strapiapp.com/api/articles',
        { title, content },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage('Article created successfully!');
    } catch (error) {
      setMessage('Failed to create article. Please try again.');
    }
  };

  if (!isAuthenticated) {
    return redirect("/login")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Create Article</button>
      {message && <p>{message}</p>}
    </form>
  );
};
// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const API_BASE_URL = 'https://wealthy-spirit-5c2093b6cd.strapiapp.com/api';

const Login = ({ setToken }) => {
  const [formData, setFormData] = useState({ identifier: '', password: '' });
  const [message, setMessage] = useState('');
  const history = useHistory();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/local`, formData);
      setToken(response.data.jwt);
      setMessage('Login successful!');
      history.push('/create-article');
    } catch (error) {
      setMessage(error.response?.data?.error?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="identifier"
          placeholder="Username or Email"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="w-full p-2 bg-green-500 text-white rounded">Login</button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
};

export default Login;
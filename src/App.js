import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import CreateArticle from './components/CreateArticle';
import Logout from './components/Logout';

const App = () => {
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');

  const handleSetMessage = (newMessage) => {
    setMessage(newMessage);
    setTimeout(() => setMessage(''), 5000);
  };

  const handleLogout = () => {
    setToken('');
    handleSetMessage('Logged out successfully!');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">User Authentication and Article Creation</h1>
      {message && <p className="mb-4 p-2 bg-blue-100 text-blue-700 rounded">{message}</p>}
      {!token ? (
        <>
          <Register setMessage={handleSetMessage} />
          <Login setToken={setToken} setMessage={handleSetMessage} />
        </>
      ) : (
        <>
          <Logout onLogout={handleLogout} />
          <CreateArticle token={token} setMessage={handleSetMessage} />
        </>
      )}
    </div>
  );
};

export default App;
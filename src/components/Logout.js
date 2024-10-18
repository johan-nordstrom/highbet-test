import React from 'react';

const Logout = ({ onLogout }) => {
  return (
    <button
      onClick={onLogout}
      className="bg-red-500 text-white p-2 rounded mb-4"
    >
      Logout
    </button>
  );
};

export default Logout;
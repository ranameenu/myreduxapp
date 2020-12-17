import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <Users />
      </div>
    </div>
  );
};

export default App;

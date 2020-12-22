import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-danger">
      <div className="container">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

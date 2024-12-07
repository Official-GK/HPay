import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.scss';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        CodeSprout
      </Link>
      <div className="nav-links">
        <Link to="/code">Code Editor</Link>
        <Link to="/learn">Learn</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
}

export default Navbar; 
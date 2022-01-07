import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container-fluid">
        <Link to='/' className="nav-title h3 text-decoration-none">SUBCON SPACE</Link>
      </div>
    </nav>
  )
}

export default Navbar

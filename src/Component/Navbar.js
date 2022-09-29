import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/home">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-item nav-link active" to="/home">Home </Link>
      <Link className="nav-item nav-link" to="/about">about</Link>
      <Link className="nav-item nav-link" to="/contact">Contact</Link>
      <Link className="nav-item nav-link " to="/services">Services</Link>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar

import React from 'react'
import Link from 'gatsby-link'
import logo from '../assets/logo-white.png';

const Header = ({ siteTitle }) => (
  <div
    id="header"
  >
    <Link className="nav-logo" to="/"><img src={logo} alt="Main Logo" /></Link>
    <Link className="nav-link" to="/page-2">Contact</Link>
  </div>
)

export default Header

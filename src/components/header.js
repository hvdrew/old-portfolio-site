import React from 'react'
import Link from 'gatsby-link'
import logo from './logo-white.png';

const Header = ({ siteTitle }) => (
  <div
    className="header"
    style={{
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        maxWidth: 960,
        margin: '0 auto',
        padding: '15px 0 10px'
      }}
    >
        <Link to="/">
          <img src={logo} className="logo" />
        </Link>
        <div className="nav-links">
          <Link to="page-2" className="nav-link">Page 2</Link>
        </div>
    </div>
  </div>
)

export default Header

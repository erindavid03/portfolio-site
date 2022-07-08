import React from 'react'
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className='desktop-header'>
      <div className="header-wrap">
        <p>place</p>

        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/development">Development</NavLink></li>
                <li><NavLink to="/artworks">Artwork</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
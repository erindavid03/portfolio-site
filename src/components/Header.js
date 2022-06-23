import React from 'react'
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
        <p>place logo</p>

        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to=""></NavLink></li>
                <li><NavLink to=""></NavLink></li>
                <li><NavLink to=""></NavLink></li>
                <li><NavLink to=""></NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
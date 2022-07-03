import React from 'react';
import { NavLink } from 'react-router-dom';
import AboutIcon from './images/icons/about.png';
import ArtIcon from './images/icons/art.png';
import CodeIcon from './images/icons/code.png';
import ContactIcon from './images/icons/contact.png';
import HomeIcon from './images/icons/home.png';

function MobileNav() {
  return (
    <section className='mobile-nav'>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">
                        <img src={`${HomeIcon}`} alt= 'link to home page'/>
                        <p>Home</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/development">
                        <img src={`${CodeIcon}`} alt= 'link to development page'/>
                        <p>Develompment</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/artworks'>
                         <img src={`${ArtIcon}`} alt= 'link to artworks page'/>
                        <p>Artworks</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about'>
                        <img src={`${AboutIcon}`} alt= 'link to about page'/>
                        <p>About</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='#contact'>
                        <img src={`${ContactIcon}`} alt= 'link to contact'/>
                        <p>Contact</p>
                    </NavLink>
                </li>
            </ul>
        </nav>
    </section>
  )
}

export default MobileNav
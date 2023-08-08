import React from 'react';
import './header.css';

function Header() {
  return (
    <header className='header'>
      <nav className='nav__bar'>
        <ul>
          <li><a href='#home'>Home</a></li>
          <li><a href='#home'>Top recetas</a></li>
          <li><a href='#home'>Comidas</a></li>
          <li><a href='#home'>Postres</a></li>
        </ul>
      </nav>
      <div className='title__container'>
        <h1 className='display-2 title'>AMOR Y RECETAS</h1>
      </div>
    </header>
  )
}

export default Header;
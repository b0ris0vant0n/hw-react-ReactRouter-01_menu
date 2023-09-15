import { NavLink } from 'react-router-dom';
import React from 'react';


function Menu() {
    return (
      <nav className="menu">
        <NavLink exact activeClassName="menu__item-active" className="menu__item" to="/">Главная</NavLink>
        <NavLink activeClassName="menu__item-active" className="menu__item" to="/drift">Дрифт-такси</NavLink>
        <NavLink activeClassName="menu__item-active" className="menu__item" to="/timeattack">Time Attack</NavLink>
        <NavLink activeClassName="menu__item-active" className="menu__item" to="/forza">Forza Karting</NavLink>
      </nav>
    );
  }

export default Menu
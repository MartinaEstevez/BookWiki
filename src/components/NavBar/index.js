import React from "react";
import CartWidget from "../CartWidget";
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">BookWiki</span>
        <ul className="nav">
          <li className="nav-item">
            <NavLink to="/home" className="nav-link active" aria-current="page" href="Home">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="category/Classics" className="nav-link active" aria-current="page" href="Classics">
              Classics
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="category/Bestsellers" className="nav-link active" aria-current="page" href="Bestsellers">
              Bestsellers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="category/Poetry" className="nav-link" href="Poetry">
              Poetry
            </NavLink>
          </li>
        </ul>
        <NavLink to="CartWidget">
          <CartWidget />
        </NavLink>
        
      </div>
    </nav>
  );
};

export default NavBar;

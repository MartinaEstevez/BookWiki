import React from "react";
import CartWidget from "../CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">BookWiki</span>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="Collections">
              Collections
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Bestsellers">
              Bestsellers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Contact">
              Contact
            </a>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;

import React from "react";
import CartWidget from "../CartWidget";
import { useCartContext } from "../CartContext";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const { cartList } = useCartContext();
  return (
    <nav className="navbar navbar">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">BookWiki</span>
        <ul className="nav">
          <li className="nav-item">
            <NavLink
              to="/home"
              className="nav-link active"
              aria-current="page"
              href="Home"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="category/Classics"
              className="nav-link active"
              aria-current="page"
              href="Classics"
            >
              Classics
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="category/Bestsellers"
              className="nav-link active"
              aria-current="page"
              href="Bestsellers"
            >
              Bestsellers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="category/Poetry" className="nav-link" href="Poetry">
              Poetry
            </NavLink>
          </li>
        </ul>
        <div>
          {cartList.length > 0 && (
          <NavLink to="/Cart">
            <CartWidget />
          </NavLink> 
        )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

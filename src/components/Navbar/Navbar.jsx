import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";

function Navbar() {

  const [searchText, setSearchText] = useState('');


  return (
    <nav className="navbar">
      <img src="images\logooscuro.svg" alt="logo" />
      <section className="menuNavbar">
        <NavLink activeClassName="active" to="/">home</NavLink>
        <NavLink activeClassName="active" to="/catalogueView">catálogo</NavLink>
      </section>
      <section className="loginOptions">
        <img src="images\userIcon.svg" alt="user" />
        <NavLink activeClassName="active" to="/login">login/registro</NavLink>
      </section>
      <section className="cartFind">
        <img src="images\scartIcon.svg" alt="carrito" />
        <NavLink activeClassName="active" to="/cart"></NavLink>
        <input 
          type="text" 
          className="search-input" 
          placeholder="Buscar..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        {!searchText}
      </section>
    </nav>
  );
}

export default Navbar;

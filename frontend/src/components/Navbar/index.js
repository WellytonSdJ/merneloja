import React from 'react';
import './styles.css'
import { Link } from 'react-router-dom'

function Navbar({ click }) {
  return (
    <nav className="navbar">
      {/* logo */}
      <Link to="/">
      <div className="navbar__logo">
        <h2>MERN E-Loja</h2>
      </div>
      </Link>
      {/* links */}
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Carrinho
              <span className="cartlogo__badge">0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">
            Loja
          </Link>
        </li>
        <li>
          <Link to="/teste">
            Teste
          </Link>
        </li>

      </ul>
      <div className="hamburger__menu" onClick={ click }>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;
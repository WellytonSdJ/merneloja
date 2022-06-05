import React, { useEffect, useState } from 'react';
import './styles.css'
import { Link } from 'react-router-dom'

function Navbar({ click }) {
  const [cart, setCart] = useState([])
  const cartItemsLocalStorage = Object.values(localStorage); //pega os valores do storage

  const handleCartState = () => { // valida os items adicionados no localStorage do usuários e envia pro state 'cart'
    const newItem = cartItemsLocalStorage.map(item => JSON.parse(item)) // ajusta para poder ler como json novamente
    setCart(newItem)
  }

  const getCartCount = () => {
    const newItem = cartItemsLocalStorage.map(item => JSON.parse(item)) // ajusta para poder ler como json novamente
    const acumulado = newItem.reduce((qty, item) => item.qty + qty, 0)
    return acumulado
  }

  useEffect(() => {
    handleCartState()
  }, [])

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
              <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">
            Loja
          </Link>
        </li>

      </ul>
      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;
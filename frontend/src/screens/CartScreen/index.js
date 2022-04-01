import './styles.css'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//components
import CartItem from '../../components/CartItem';

function CartScreen() {
  const [cart, setCart] = useState([])

  const handleCartState = () => { // valida os items adicionados no localStorage do usuários e envia pro state 'cart'
    const cartItemsLocalStorage = Object.values(localStorage); //pega os valores do    
    const newItem = cartItemsLocalStorage.map(item => JSON.parse(item)) // ajusta para poder ler como json novamente
    setCart(newItem)
  }

  useEffect( () => {
    handleCartState()
  },[])

  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2>Carrinho</h2>
        {// caso haja produtos renderize, caso não, dê opção de voltar
          cart.length === 0 ? (
            <div>
              Seu carrinho está vazio <Link to="/">Voltar</Link>
            </div>
          ) : (
            cart.map(item =>              
              (<CartItem item={item}/>              
            ))
          )
        }
      </div>
      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p>Subtotal (0) items</p>
          <p>R$499.99</p>
        </div>
        <div>
          <button>
            Prosseguir para comprar
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartScreen;
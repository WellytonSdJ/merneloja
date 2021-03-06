import './styles.css'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//components
import CartItem from '../../components/CartItem';

function CartScreen() {
  const [cart, setCart] = useState([])
  const cartItemsLocalStorage = Object.values(localStorage); //pega os valores do storage
  let newItem = cartItemsLocalStorage.map(item => JSON.parse(item)) // ajusta para poder ler como json novamente

  const handleCartState = () => { // valida os items adicionados no localStorage do usuários e envia pro state 'cart'
    setCart(newItem)
  }

  const getCartCount = () => {
    const acumulado = newItem.reduce((qty, item) => item.qty + qty, 0)
    console.log('newItem', newItem)
    console.log('acumulado', acumulado)
    return acumulado
  }

  const getCartSubTotal = () => {
    const acumulado = newItem.reduce((price, item) => (item.price * item.qty) + price, 0)
    return acumulado
  }



  useEffect(() => {
    handleCartState()
  }, [])

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
            (<CartItem item={item} handleCartState={handleCartState} key={item.product} />
            ))
          )
        }
      </div>
      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p>Subtotal ({getCartCount()}) items</p>
          <p>R${getCartSubTotal().toFixed(2)}</p>
        </div>
        <div>
          <button onClick={getCartCount}>
            Prosseguir para comprar
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartScreen;
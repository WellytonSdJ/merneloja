import React from 'react';
import './styles.css'

//components
import CartItem from '../../components/CartItem';

function CartScreen() {
  return ( 
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2>Carrinho</h2>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
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
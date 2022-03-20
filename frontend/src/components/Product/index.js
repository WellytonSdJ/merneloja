import React from 'react';
import './styles.css'
import { Link } from 'react-router-dom';

function Product() {
  return ( 
    <div className="product">
      <img src="https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product name" />

      <div className="product__info">
        <p className="info__name">Product 1</p>
        <p className="info__description">
        Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis.Quem num gosta di mim que vai caçá sua turmis!Si num tem leite então bota uma pinga aí cumpadi!Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.
        </p>

        <p className="info__price">R$499.99</p>
        
        <Link to={`/product/${111}`} className="info__button">Conferir</Link>
      </div>
    </div>
   );
}

export default Product;
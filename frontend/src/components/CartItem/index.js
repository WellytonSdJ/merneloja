import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom'

function CartItem({ item }) {
  console.log('item name->', item.name)


  return ( 
  <div className="cartitem">
    <div className="cartitem__image">
    <img src={item.imageUrl} alt={item.name} />
    </div>

    <Link to={ `api/product/${item.product}`} className="cartitem__name">
      <p>{item.name}</p>
    </Link>

    <p className="cartitem__price">${item.price}</p>
    
    <select className="cartitem__select" value={item.qty} onChange={() => console.Console('alguma coisa')}>
      {
        [...Array(item.countInStock).keys()].map( x =>(
          <option key={x+1} value={x+1}>{x+1}</option>
        ))
      }
    </select>

    <button className="cartitem__deleteBtn">
      <i className="fas fa-trash"></i>
    </button>
    
  </div> );
}

export default CartItem;
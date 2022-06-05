import './styles.css';
import { Link } from 'react-router-dom'
import { useEffect } from 'react';

function CartItem({ item, handleCartState }) {
  const handleRemoveItem = () => {
    localStorage.removeItem(JSON.stringify(item.product));
    handleCartState() // atualiza o carrinho
  }

  const handleQty = (e) => {
    const qt = parseInt(e.target.value) // pega o valor e converte para um inteiro
    const newQty = { ...item, qty: qt } // está certo, só preciso pegar a quantidade variável
    localStorage.setItem(JSON.stringify(item.product), JSON.stringify(newQty))
    handleCartState() // atualiza o carrinho
  }

  // useEffect(() => {
  //   CartItem()
  // }, [handleQty])

  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={item.imageUrl} alt={item.name} />
      </div>

      <Link to={`api/product/${item.product}`} className="cartitem__name">
        <p>{item.name}</p>
      </Link>

      <p className="cartitem__price">${item.price.toFixed(2)}</p>

      <select className="cartitem__select" value={item.qty} onChange={handleQty}>
        {
          [...Array(item.countInStock)
            .keys()]
            .map(x => (
              <option key={x + 1} value={x + 1}>{x + 1}</option>
            ))
        }
      </select>

      <button className="cartitem__deleteBtn" onClick={handleRemoveItem}>
        <i className="fas fa-trash"></i>
      </button>

    </div>);
}

export default CartItem;
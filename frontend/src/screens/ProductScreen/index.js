import React, { useState, useEffect } from 'react';
import './styles.css'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

function ProductScreen() {
  const [product, setProduct] = useState([])
  const id = useParams();
  const navigate = useNavigate();


  const [qty, setQty] = useState(1);


  const productDetails = async (id) => {
    try {
      const { data } = await axios.get(`/api/products/${id.id}`);
      setProduct(data)
    } catch (error) {
      console.log(error)
    }
  }

  const addToCartHandle = async (id, qty) => {
    // criar um payload com os dados do produto e também a quantidade
    try {
      const { data } = await axios.get(`/api/products/${id.id}`);
      const payload = {
        product: data._id,
        name: data.name,
        imageUrl: data.imageUrl,
        price: data.price,
        countInStock: data.countInStock,
        qty
      }
      // console.log('payload ->', payload)
      //salva os items no localStorage - separando cada produto por id
      localStorage.setItem(JSON.stringify(id.id), JSON.stringify(payload))
      // redireciona pra página do carrinho
      navigate('/cart')
    } catch (error) {
      console.log(error)      
    }
  }
  

  useEffect(() => {
    productDetails(id)
  }, [])


  return (
    <div className="productscreen">
      
      <div className="productscreen__left">
        <div className="left__image">
          <img src={product.imageUrl} alt={product.name} />
          <div className="left__info">
            <p className="left__name">{product.name}</p>
            <p >Preço: ${product.price}</p>
            <p >Descrição: {product.description}</p>
          </div>
        </div>
      </div>
      <div className="productscreen__right">
        <div className="right__info">
          <p>
            Preço: <span>$499.99</span>
          </p>
          <p>
            Status:
            <span>{product.countInStock > 0 ? "Em estoque" : "Sem estoque no momento"}</span>
            Em estoque
          </p>
          <p>
            Quantidade:
            {/* <button className="btn-qtd" onClick={(e) =>{setQty(qty + 1)}}>+</button>
            {qty}
            <button className="btn-qtd" onClick={(e) =>{ qty === 0 ? setQty( 0 ) : setQty( qty - 1 ) }}>-</button> */}
            <select value={qty} onChange={(e) => { setQty(e.target.value) }}>
              {
                [...Array(product.countInStock)
                  .keys()]
                  .map((x) =>
                  (<option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>)
                  )}
            </select>
          </p>
          <p>
            <button type="button" onClick={() => addToCartHandle( id , qty )} >Adicionar ao Carrinho</button>
          </p>
        </div>
      </div>

    </div>
  );
}

export default ProductScreen;
import React, { useState, useEffect } from 'react';
import './styles.css'
import {useParams } from 'react-router-dom'
import axios from 'axios';

function ProductScreen( ) {
  const [product, setProduct] = useState([])
  const id = useParams();

  const [qty, setQty] = useState(1);


  const productDetails = async (id)=> {
    try {
      const { data } = await axios.get(`/api/products/${id.id}`);
      setProduct(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    productDetails(id)
  },[])


  return (
    /*
    _id,
     countInStock
     price
     description
     imageUrl
     name
     */
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
            Status: Em estoque
          </p>
          <p>
            Quantidade:
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </p>
          <p>
            <button type="button">Adicionar ao Carrinho</button>
          </p>
        </div>
      </div>

    </div>
  );
}

export default ProductScreen;
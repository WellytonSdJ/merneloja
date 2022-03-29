import React, { useState, useEffect } from 'react';
import './styles.css'
import { useDispatch, useSelector } from 'react-redux'
import {useParams,  } from 'react-router-dom'

// actions
import { getProductDetails } from '../../redux/actions/productActions';
import { addToCart } from '../../redux/actions/cartActions';

function ProductScreen( ) {

  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  let id = useParams();

  const productDetails = useSelector( state => state.getProductDetails);
  const {loading, error, product} = productDetails;

  useEffect(() => {
    console.log('productDetails ->', productDetails)
    if(product && id !== product._id) {
      dispatch(getProductDetails(id))
    }
  },[dispatch, product, id]);


  return (
    <div className="productscreen">
      <div className="productscreen__left">
        <div className="left__image">
          <img src="https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product name" />
          <div className="left__info">
            <p className="left__name">Product 1</p>
            <button onClick={() => console.log('id ->',id)}>teste</button>
            <p >Preço: $499.99</p>
            <p >Descrição: Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero suscipit sequi fugit tempore consequatur alias quia eos, accusamus, at exercitationem sint nemo minus harum sit autem. Culpa dolorum blanditiis incidunt?</p>
          </div>
        </div>
      </div>
      <div className="productscreen__right">
        <div className="right__info">
          <p>
            Preço: <span>$499.99</span>
          </p>
          <p>
            Status: <span>Em estoque</span>
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
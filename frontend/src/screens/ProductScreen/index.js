import React from 'react';
import './styles.css'

function ProductScreen() {
  return (
    <div className="productscreen">
      <div className="productscreen__left">
        <div className="left__image">
          <img src="https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product name" />

          <div className="left__info">
            <p className="left__name">Product 1</p>
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
            Stats: <span>Em estoque</span>
          </p>
          <p>
            Qtd
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </p>
          <p>
            <button type="button">Adicinoar ao Carrinho</button>
          </p>
        </div>
      </div>

    </div>
  );
}

export default ProductScreen;
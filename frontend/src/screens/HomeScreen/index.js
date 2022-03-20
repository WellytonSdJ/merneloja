import React from 'react';
import Product from '../../components/Product';
import './styles.css'


function HomeScreen() {
  return (
    <div className="homescreen">
      <h2 className="homescreen_title">Ultimos Produtos</h2>

      <div className="homescreen__products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default HomeScreen;
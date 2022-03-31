import React, { useState } from 'react';
import './styles.css'
import { useEffect } from 'react';
import axios from 'axios';

//components
import Product from '../../components/Product';


function HomeScreen() {
  const [products, setProducts] = useState([])

  const listProducts = async () => {
    try {
      const { data } = await axios.get("/api/products");
      setProducts(data)      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect( () =>{
    listProducts()
  }, []);

  return (
    //imageUrl, name, price, description, productId
    <div className="homescreen">
      <h2 className="homescreen_title">Confira nossos produtos! :)</h2>

      <div className="homescreen__products">
        {products === [] ? (
          <h2>Carregando...</h2>
          ) : products.map(product => (
          <Product 
            key={product._id}
            productId={product._id}
            name={product.name}
            price={product.price}
            description={product.description}
            imageUrl={product.imageUrl}
            />
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
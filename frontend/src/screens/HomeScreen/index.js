import React from 'react';
import './styles.css'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//components
import Product from '../../components/Product';

//actions
import { getProducts as listProducts} from '../../redux/actions/productActions';

function HomeScreen() {
  const dispatch = useDispatch();

  const getProducts = useSelector( state => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect( () =>{
    dispatch(listProducts())
  }, [dispatch]);

  return (
    //imageUrl, name, price, description, productId
    <div className="homescreen">
      <h2 className="homescreen_title">Ultimos Produtos</h2>

      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
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
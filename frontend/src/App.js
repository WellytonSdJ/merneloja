import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

//components
import Backdrop from './components/Backdrop';
import Navbar from './components/Navbar';
import SideDrawer from './components/SideDrawer';

function App() {

  const [sideToggle, setSideToggle] = useState(false)

  const handleToggle = () => {
    sideToggle ? setSideToggle(false) : setSideToggle(true)
  }

  return (
    <Router>    
      {/*NAVBAR OK */}
      <Navbar click={ handleToggle }/>
      {/*SideDrawer */}
      <SideDrawer show={sideToggle} click={handleToggle}/> {/*preciso que o click seja false */}
      {/*Backdrop*/}
      <Backdrop show={sideToggle} click={handleToggle}/>
      <main>
        <Routes>
          <Route exact path="/" element={<HomeScreen/>}/>
          <Route exact path="/product:id" element={<ProductScreen/>}/>
          <Route exact path="/cart" element={<CartScreen/>}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;

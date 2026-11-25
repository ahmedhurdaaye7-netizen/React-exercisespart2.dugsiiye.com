import React from 'react'
import shopingCart from './ShopingContext';
import ProductTitle from './ProductTitle';
import CartSummary from './SumarryCart';

import { useState } from 'react';
const App = () => {
 const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const value = { cartItems, addToCart, removeFromCart };
  return (
    <div>
       
 <shopingCart.Provider value={value}>
      <ProductTitle itemId={1} itemName="Widget" price={19.99} />
      < ProductTitle itemId={2} itemName="Gadget" price={29.99} />
      <CartSummary />
    </shopingCart.Provider>
      
    </div>
  )
}

export default App

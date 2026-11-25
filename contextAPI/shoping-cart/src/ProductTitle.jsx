import React, { useContext } from 'react';
import shopingCart from './ShopingContext';

function ProductTitle({ itemId, itemName, price }) {
  const { addToCart } = useContext(shopingCart);

  const handleAdd = () => {
    addToCart({ id: itemId, name: itemName, price });
  };

  return (
    <div>
      <p>{itemName}</p>
      <p>Price: ${price}</p>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
}

export default ProductTitle;
import React from 'react';

const CartItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;

  const itemTotal = quantity * price;

  return (
    <div className="flex justify-between items-center">
      <div className="w-14 h-14">
        <img src={imageUrl} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col items-center">
        <h2>{name}</h2>
        <h2>{quantity} x</h2>
      </div>
      <h2>{itemTotal}</h2>
    </div>
  );
};

export default CartItem;

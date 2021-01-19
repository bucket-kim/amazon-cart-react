import React from 'react';
import CartItem from './CartItem';
import "./CartItems.css";

function CartItems() {
  return (
    <div className="carItem-Main">
      <h1>Shopping Cart</h1>
      <hr/>
      <div className="cartItem">
        <CartItem />
      </div>
    </div>
  )
}

export default CartItems

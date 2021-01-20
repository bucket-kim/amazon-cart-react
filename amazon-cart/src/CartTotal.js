import React from 'react';
import "./CartTotal.css";

function CartTotal() {
  return (
    <div className="cartTotal">
      <h3>
        Subtotal(5 items):
        <span className="cartTotal-price">
          $2,172.38
        </span>
      </h3>
      <button>
        Proceed to checkout
      </button>
    </div>
  )
}

export default CartTotal

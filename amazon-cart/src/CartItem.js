import React from 'react';
import "./CartItem.css";

function CartItem() {
  return (
    <div className="CartItem">
      <div className="CartItem-image">
        <img src="https://www.bhphotovideo.com/images/images2500x2500/apple_mthl2ll_a_ipad_pro_64gb_wi_fi_1568358.jpg"/>
      </div>
      <div className="CartItem-info">
        <div className="info-title">
          <h2>Ipad Pro "12.9</h2>
        </div>
        <div className="info-stock">
          In Stock
        </div>
        <div className="item-actions">
          <div className="item-quantity">
            <select>
              <option value="1">Qty: 1</option>
              <option value="2">Qty: 2</option>
              <option value="3">Qty: 3</option>
              <option value="4">Qty: 4</option>
            </select>
          </div>
          <div className="item-actions-divider">|</div>
          <div className="item-delete">
            Delete
          </div>
        </div>
      </div>
      <div className="CartItem-price">
        $769.00
      </div>
    </div>
  )
}

export default CartItem

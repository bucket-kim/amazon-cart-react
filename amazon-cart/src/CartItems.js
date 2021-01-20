import React from 'react';
import CartItem from './CartItem';
import "./CartItems.css";

function CartItems({items, setCartItems}) {

  const changeItemQuantity = (e, index) => {
    // when we select a quantity on item, we pass it in
    // pass in the index
    // using the index, we need to change the quantity to selected option
    // update item state
    // ***Don't update the state without setter fuction
    const newItems = [...items]
    newItems[index].quantity = e.target.value;
    setCartItems(newItems);
  }

  const deleteItem = (deleteIndex) => {
    // filter out the item where the item index isn't equal to the selected item
    const newItems = items.filter((value, index) => {
      return index !== deleteIndex
    })
    setCartItems(newItems);
  }

  return (
    <div className="carItem-Main">
      <h1>Shopping Cart</h1>
      <hr/>
      <div className="cartItem">
        {items.map((item, index) =>
          <CartItem 
            index={index}
            key={index}
            item={item}
            changeItemQuantity={changeItemQuantity}
            deleteItem={deleteItem}
          />
        )}
      </div>
    </div>
  )
}

export default CartItems

import { useState } from 'react';
import './App.css';
import CartItems from './CartItems';
import CartTotal from './CartTotal';
import Header from './Header';
import data from './Data';

function App() {

  const [cartItems, setCartItems] = useState(data);

  return (
    <div className="App">
      <Header />
      <div className="App-main">
        <CartItems items={cartItems}/>
        <CartTotal />
      </div>
    </div>
  );
}

export default App;
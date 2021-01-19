import './App.css';
import CartItems from './CartItems';
import CartTotal from './CartTotal';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-main">
        <CartItems />
        <CartTotal />
      </div>
    </div>
  );
}

export default App;
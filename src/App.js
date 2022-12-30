import "./App.css";
import { Fragment, useState } from "react";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);
  const showCartHandler = () => {
    setShowCart(true);
  };

  const closeCartHandler = () => {
    setShowCart(false);
  };
  return (
    <Fragment>
      {showCart && <Cart onClose={closeCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <ProductList />
      </main>
    </Fragment>
  );
}

export default App;

import "./App.css";
import { Fragment } from "react";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <ProductList />
      </main>
    </Fragment>
  );
}

export default App;
